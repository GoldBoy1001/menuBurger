function prc($pxOne, $pxTwo) {
   $result: math.div($pxOne, $pxTwo) * 100 %;
   return $result;
}

//REM
function rem($px) {
   result: math.div($px, 16) + rem;
   return result;
}
//EM
function em($px) {
   result: math.div($px, 16) + em;
   return result;
}

// Определение устройства

const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },

   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};

if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}

//=====================================================================
