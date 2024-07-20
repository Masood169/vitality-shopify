function mapIcon() {
  const allSpans = Array.from(document.getElementsByTagName('span'))
  let mySpanIWantToChange;

  allSpans.forEach((span) => {
    if (span.innerText === "Premier Provider - All Treatments & Skincare") {
        mySpanIWantToChange = span;
        span.innerText = ''
        span.className += " hide"; 
        const newDiv = document.createElement('div')
        const iconHTML = '<img src="https://cdn.shopify.com/s/files/1/0064/3003/1908/files/VI_icon_2x_746a2c26-ea22-42b6-85b4-5e212591ea86.png?v=1651512311" class="premier_icon" style="float:right; margin-top: -75px">'
        newDiv.innerHTML = iconHTML;
        mySpanIWantToChange.appendChild(newDiv);
    }
})

};


$( window ).on( "load", function() {
    var checkExist = setInterval(function() {
        if ($('.scasl-list-details').length) {
            mapIcon();
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms

    checkExist;

});


$( window ).on( "load", function() {
   let checkedCount = 0;
console.log("Loading checkbox script")

function handleNewElements(mutationsList, observer) {
  observer.disconnect();

  let checkedBoxes = []; 

  mutationsList.forEach((mutation) => {
    if (mutation.type === 'childList') {
      mutation.addedNodes.forEach((addedNode) => {
        if (addedNode.nodeType === 1) {
          console.log('New element added:', addedNode);
          const check = addedNode.querySelectorAll('input[type="checkbox"]');
  const premierProviderCheckbox = addedNode.querySelectorAll('input[value="Premier Provider - All Treatments & Skincare"]');

     if (premierProviderCheckbox[0]) {
       
      targetNode.append(premierProviderCheckbox[0].closest('li'));
     }
          if (check[0]) {
            check[0].addEventListener("change", function () {
              if (this.checked) {
                if (this.value === "Premier Provider - All Treatments & Skincare") {
                 
                  checkedBoxes.forEach(cb => {
                    if (cb !== this) {
                      cb.checked = false;
                    }
                  });
                  checkedBoxes = [this]; 
                } else {
                  const premierProvider = checkedBoxes.find(cb => cb.value === "Premier Provider - All Treatments & Skincare");
                  if (premierProvider) {
                    premierProvider.checked = false;
                    checkedBoxes = checkedBoxes.filter(cb => cb !== premierProvider);
                  }
                  checkedBoxes.push(this); 
                  if (checkedBoxes.length > 2) {
                    let lastChecked = checkedBoxes[checkedBoxes.length - 2]; 
                    lastChecked.checked = false; 
                    checkedBoxes.splice(checkedBoxes.length - 2, 1);
                  }
                }
              } else {
                checkedBoxes = checkedBoxes.filter(cb => cb !== this); 
              }
              console.log("Checked checkboxes ", checkedBoxes);
            });
          }
          console.log("Added node checkbox ", check);
        }
      });
    }
  });

  observer.observe(targetNode, observerConfig);
}




const targetNode = document.getElementById('scasl-tag-list-container');

const observerConfig = {childList: true};

const observer = new MutationObserver(handleNewElements);

observer.observe(targetNode, observerConfig);



  
    var checkExist = setInterval(function() {
        if ($('.scasl-list-details').length) {
            mapIcon();
            clearInterval(checkExist);
        }
    }, 100); // check every 100ms

    checkExist;

});

document.getElementById("scasl-tag-list-container").onclick = function() {refreshIcon()};
document.getElementById("bh-sl-submit").onclick = function() {refreshIcon()};



function refreshIcon() {
  setTimeout(mapIcon, 2500);
 
};  
