(function() {
  // The width and height of the captured photo. We will set the
  // width to the value defined here, but the height will be
  // calculated based on the aspect ratio of the input stream.

  var width = 320;    // We will scale the photo width to this
  var height = 0;     // This will be computed based on the input stream

  // |streaming| indicates whether or not we're currently streaming
  // video from the camera. Obviously, we start at false.

  var streaming = false;

  // The various HTML elements we need to configure or control. These
  // will be set by the startup() function.

  var video = null;
  var canvas = null;
  var photo = null;
  var startbutton = null;
  var photoanalze= null;

  function startup() {
    video = document.getElementById('video');
    canvas = document.getElementById('canvas');
    photo = document.getElementById('photo');
    startbutton = document.getElementById('startbutton');
    detectface = document.getElementById('detectface');

    navigator.getMedia = ( navigator.getUserMedia ||
                           navigator.webkitGetUserMedia ||
                           navigator.mozGetUserMedia ||
                           navigator.msGetUserMedia);

    navigator.getMedia(
      {
        video: true,
        audio: false
      },
      function(stream) {
        if (navigator.mozGetUserMedia) {
          video.mozSrcObject = stream;
        } else {
          var vendorURL = window.URL || window.webkitURL;
          video.src = vendorURL.createObjectURL(stream);
        }
        video.play();
      },
      function(err) {
        console.log("An error occured! " + err);
      }
    );

    video.addEventListener('canplay', function(ev){
      if (!streaming) {
        height = video.videoHeight / (video.videoWidth/width);
      
        // Firefox currently has a bug where the height can't be read from
        // the video, so we will make assumptions if this happens.
      
        if (isNaN(height)) {
          height = width / (4/3);
        }
      
        video.setAttribute('width', width);
        video.setAttribute('height', height);
        canvas.setAttribute('width', width);
        canvas.setAttribute('height', height);
        streaming = true;
      }
    }, false);

    startbutton.addEventListener('click', function(ev){
      takepicture();
      ev.preventDefault();
    }, false);

      
    detectface.addEventListener('click', function(ev){
      // console.log(photoanalze);
      postData(photoanalze);
      ev.preventDefault();
    }, false);

    clearphoto();
  }

  // Fill the photo with an indication that none has been
  // captured.

  function clearphoto() {
    var context = canvas.getContext('2d');
    context.fillStyle = "#AAA";
    context.fillRect(0, 0, canvas.width, canvas.height);

    var data = canvas.toDataURL('image/png');
    photo.setAttribute('src', data);
  }
  
  // Capture a photo by fetching the current contents of the video
  // and drawing it into a canvas, then converting that to a PNG
  // format data URL. By drawing it on an offscreen canvas and then
  // drawing that to the screen, we can change its size and/or apply
  // other changes before drawing it.

  function takepicture() {
    var context = canvas.getContext('2d');
    if (width && height) {
      canvas.width = width;
      canvas.height = height;
      context.drawImage(video, 0, 0, width, height);
    
      var data = canvas.toDataURL('image/png');
      photo.setAttribute('src', data);
      photoanalze= data;
    } else {
      clearphoto();
      document.getElementById('responseTextArea').value="";
    }
  }

 function makeblob (dataURL) {
    var BASE64_MARKER = ';base64,';
    if (dataURL.indexOf(BASE64_MARKER) == -1) {
        var parts = dataURL.split(',');
        var contentType = parts[0].split(':')[1];
        var raw = decodeURIComponent(parts[1]);
        return new Blob([raw], { type: contentType });
    }
    var parts = dataURL.split(BASE64_MARKER);
    var contentType = parts[0].split(':')[1];
    var raw = window.atob(parts[1]);
    var rawLength = raw.length;

    var uInt8Array = new Uint8Array(rawLength);

    for (var i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }

    return new Blob([uInt8Array], { type: contentType });
}
serialize = function(obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
}

function postData(data) {
   var params = {
        "returnFaceId": "true",
        "returnFaceLandmarks": "false",
        "returnFaceAttributes":
            "age,gender,headPose,smile,facialHair,glasses,emotion," +
            "hair,makeup,occlusion,accessories,blur,exposure,noise"
    };

  let url = 'https://westcentralus.api.cognitive.microsoft.com/face/v1.0/detect?' + serialize(params);
  // let url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize?' + serialize(params);

  return fetch(url, {
    body: makeblob(data), 
    cache: 'no-cache',    // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      'Content-Type': 'application/octet-stream',
      // 'Ocp-Apim-Subscription-Key': '55c111fd66f340289347a12ba4063c73'   //recognize
      'Ocp-Apim-Subscription-Key': '09e1943bd89448dc8b0639a451847296'   
    },
    method: 'POST'
  })
  .then(response => response.json()) // parses response to JSON
  .then(function(myJson) {
    // console.log(myJson)
      // console.log(myJson[0].faceRectangle);

/*
[
  {
    "faceId": "4211cd8b-3573-4391-817e-d04a65e0b043",
    "faceRectangle": {
      "top": 144,
      "left": 153,
      "width": 74,
      "height": 74
    },
    "faceAttributes": {
      "smile": 0,
      "headPose": {
        "pitch": 0,
        "roll": -0.1,
        "yaw": 6.4
      },
      "gender": "male",
      "age": 49,
      "facialHair": {
        "moustache": 0.4,
        "beard": 0.1,
        "sideburns": 0.1
      },
      "glasses": "NoGlasses",
      "emotion": {
        "anger": 0,
        "contempt": 0,
        "disgust": 0,
        "fear": 0,
        "happiness": 0,
        "neutral": 0.996,
        "sadness": 0.004,
        "surprise": 0
      },
      "blur": {
        "blurLevel": "low",
        "value": 0.07
      },
      "exposure": {
        "exposureLevel": "goodExposure",
        "value": 0.53
      },
      "noise": {
        "noiseLevel": "low",
        "value": 0
      },
      "makeup": {
        "eyeMakeup": false,
        "lipMakeup": false
      },
      "accessories": [],
      "occlusion": {
        "foreheadOccluded": false,
        "eyeOccluded": false,
        "mouthOccluded": false
      },
      "hair": {
        "bald": 0.03,
        "invisible": false,
        "hairColor": [
          {
            "color": "gray",
            "confidence": 0.99
          },
          {
            "color": "black",
            "confidence": 0.98
          },
          {
            "color": "other",
            "confidence": 0.49
          },
          {
            "color": "blond",
            "confidence": 0.39
          },
          {
            "color": "brown",
            "confidence": 0.13
          },
          {
            "color": "red",
            "confidence": 0
          }
        ]
      }
    }
  }
]
*/   

    var faceAttributes = myJson[0].faceAttributes;
    var age = faceAttributes.age;
    var gender = faceAttributes.gender;
    var facialHair = (faceAttributes.facialHair.beard>0) ? 'with  beard ':'' 
    facialHair += (faceAttributes.facialHair.moustache>0)? ' has moustache ':'';

    var res= '<strong> Detected ' + gender +' of ' + age + 'years'  + facialHair +'</strong>';
    document.getElementById('desc').innerHTML= res;

      var resultDiv = document.getElementById('responseTextArea');
      resultDiv.value= JSON.stringify(myJson, null, 2);
      
  });
}
  window.addEventListener('load', startup, false);


})();
