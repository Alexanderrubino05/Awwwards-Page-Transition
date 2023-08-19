function showDetailsSection(sectionID) {
  const detailSection = document.getElementById(sectionID)
  const closeUpImage = detailSection.querySelector('.detail-imgs-div').querySelector('.closeup-detail-img')
  const carseatImage = detailSection.querySelector('.detail-imgs-div').querySelector('.carseat-detail-img')

  detailSection.style.transform = 'translate(0%)'
  setTimeout(() => {
    carseatImage.style.transform = 'translateX(0%)'
    carseatImage.style.opacity = '1'

    setTimeout(() => {
      closeUpImage.style.transform = 'translate(0%, -50%)'
      closeUpImage.style.opacity = '1'
    }, 100)
  }, 200)
}

function dismissDetialsSection(sectionID, reverse) {
  const detailSection = document.getElementById(sectionID)
  const closeUpImage = detailSection.querySelector('.detail-imgs-div').querySelector('.closeup-detail-img')
  const carseatImage = detailSection.querySelector('.detail-imgs-div').querySelector('.carseat-detail-img')
  
  const translateValue = reverse ? -100 : 100
  //Reverse the dismiss order
  carseatImage.style.transform = `translateX(${translateValue}%)`
  carseatImage.style.opacity = '0'
  setTimeout(() => {
    closeUpImage.style.transform = `translate(${translateValue}%, -50%)`
    closeUpImage.style.opacity = '0'
    
    setTimeout(() => {
      detailSection.style.transform = `translateX(${translateValue}%)`
    }, 100)
  }, 200)
}