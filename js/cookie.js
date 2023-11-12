//UNFINISHED

// async function checkBackendForAuth(){
// 	try {
// 		// Send a GET request to the server's /accessContent route
// 		fetch('https://cookies.simplyai.io/accessContent', {
// 			method: 'GET',
// 			headers: {
// 				'Content-Type': 'application/json',
// 				"Access-Control-Allow-Origin": "https://auth.simplyai.io",
// 				"Access-Control-Allow-Credentials": "true"
// 			},
// 			credentials: "include",
			
// 		}).then(response => {
// 			if (!response.ok) {
// 				//window.location.href = 'https://auth.simplyai.io';
//                 document.getElementById('MAINBODY').style.display='block';
// 			}
// 			return response.json()
		  
// 		}).then(data => {
// 			const token = data.token;
// 			const auth = getAuth();
// 			signInWithCustomToken(auth, token)
// 			.then((userCredential) => {
// 				//console.log('b tried redirect')
// 				window.location.href = 'https://app.simplyai.io';
// 			})
// 			.catch((error) => {
// 				//console.error('Error:', error);
// 				//window.location.href = 'https://auth.simplyai.io';
//                 document.getElementById('MAINBODY').style.display='block';
// 			});
// 		}).catch((error)  => {
// 			//console.error('Error:', error);
// 			//window.location.href = 'https://auth.simplyai.io';
//             document.getElementById('MAINBODY').style.display='block';
// 		});
// 	} catch (error) {
// 		//console.error('Error:', error);
// 		//window.location.href = 'https://auth.simplyai.io';
//         document.getElementById('MAINBODY').style.display='block';
// 	}
// }