const accordionData = [
  {
    title: 'Item 1',
    content: 'Content for Item 1'
  },
  {
    title: 'Item 2',
    content: 'Content for Item 2'
  },
  {
    title: 'Item 3',
    content: 'Content for Item 3'
  },
  {
    title: 'Item 4' , 
    content: `Lorum ipsum`
  }
];

document.addEventListener("DOMContentLoaded" , function(){
  const app = document.getElementById('app');
  
  accordionData.forEach((adata)=>{

    const accordionItem = document.createElement('div');
    accordionItem.classList.add('accordion-unit')
    accordionItem.innerHTML = `<p>${adata.title}</p>`;

    const accordionDescription = document.createElement('div');
    accordionDescription.textContent = `${adata.content}`
    accordionDescription.classList.add('hide-description')
    accordionDescription.classList.add('accordion-description')
    accordionItem.append(accordionDescription);

    accordionItem.addEventListener("click" , function(e){
      e.stopImmediatePropagation();
      accordionDescription.classList.toggle('hide-description');
    })
    app.append(accordionItem);


  })

  

})
