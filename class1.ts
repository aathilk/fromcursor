async function fileScanOperation(request: ScanRequest) {
	const profileServices = ProfileServices.getInstance();
	let scanHandlerObj = new ScanHandler();
	let reformatServices = new ReformatServices();
	const { activeTextEditor } = window;
	if (activeTextEditor) {
		const document = activeTextEditor.document;
		const text = document.getText();
		if (text.trim()) {
			const lastUsedZosmfProf = zosmfProfileName;
			const uri: Uri = document.uri!;
			const uriPath = uri.path;
			console.log("URI Path: ", uriPath);
			const uriPathSplitArray = uri.path.split("/");
			console.log("URI Path Split Array: ", uriPathSplitArray);
			
			const datasetName = uriPathSplitArray[uriPathSplitArray.length - 1];
			const profileNames = profileServices.getAllZosmfProfiles();
			let zosmfProfile: ZosmfProfile;
			let commandSuccess;

			if (uriPathSplitArray.length >= 3 && !uriPathSplitArray.includes("resources") && !uriPathSplitArray.includes("temp")) {
				// This is a Zowe file, extract profile name
				zosmfProfileName = uriPathSplitArray[1]; // Assuming the profile name is the second part of the path
				console.log("Extracted Zowe Profile Name: ", zosmfProfileName);

				// Validate if the extracted profile exists
				if (!profileNames.includes(zosmfProfileName)) {
					window.showWarningMessage(`Zowe profile ${zosmfProfileName} not found.`);
					return;
				}
			} else {
				// This is a local file scan
				if (profileNames.length === 0) {
					window.showWarningMessage("No zosmf profile exists to perform operation.");
					return;
				}
				if (profileNames.includes(zosmfProfileName)) {
					profileNames.unshift(profileNames.splice(profileNames.findIndex(item => item === zosmfProfileName), 1)[0]);
				}
				zosmfProfileName = await window.showQuickPick(profileNames, {
					placeHolder: 'Select any of the following zosmf profiles for local file operation',
					ignoreFocusOut: true,
					canPickMany: false
				});
				if (zosmfProfileName === undefined) {
					window.showInformationMessage("Zosmf profile not selected. Operation cancelled.");
					return;
				}
			}

			zosmfProfile = profileServices.getZosmfProfile(zosmfProfileName);

			if (zosmfProfile.port && zosmfProfile.port > 0) {
				zosmfProfile.host = zosmfProfile.host + ":" + zosmfProfile.port;
			}

			// Scan or reformat operation logic
			if (request === ScanRequest.scanJCL || request === ScanRequest.scanAndSubmit) {
				let isScanAndSubmit = request === ScanRequest.scanAndSubmit;
				commandSuccess = await scanHandlerObj.scanEditorContent(document, datasetName, zosmfProfile.host, zosmfProfile.user, zosmfProfile.password, isScanAndSubmit).catch(console.error);

				if (isScanAndSubmit && commandSuccess) {
					await scanHandlerObj.submitEditorContent(text, zosmfProfile.host, zosmfProfile.user, zosmfProfile.password, zosmfProfileName);
				}
			} else if (request === ScanRequest.scanReformat) {
				commandSuccess = await reformatServices.reformatEditorContent(document, datasetName, zosmfProfile.host, zosmfProfile.user, zosmfProfile.password, uriPath).catch(console.error);
			} else if (request === ScanRequest.scanRemote) {
				let remoteScanServices = new RemoteScanServices();
				commandSuccess = await remoteScanServices.remoteScanOnEditorContent(document, datasetName, zosmfProfile.host, zosmfProfile.user, zosmfProfile.password);
			}

			if (commandSuccess === undefined) {
				zosmfProfileName = lastUsedZosmfProf;
			}
		} else {
			window.showWarningMessage(`There is no content in the active editor.`);
		}
	} else {
		window.showWarningMessage('There is no file opened in the active editor');
	}
}
