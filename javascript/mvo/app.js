const model = {
  currentCat: null,
  cats: [
    {
      count: 0,
      name: 'Tabby',
      imgSrc: 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/1413379559_412a540d29_z.jpg?raw=true'
    },
    {
      count: 0,
      name: 'Tiger',
      imgSrc: 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/4154543904_6e2428c421_z.jpg?raw=true'
    },
    {
      count: 0,
      name: 'Scaredy',
      imgSrc: 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/22252709_010df3379e_z.jpg?raw=true'
    },
    {
      count: 0,
      name: 'Showdom',
      imgSrc: 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/434164568_fea0ad4013_z.jpg?raw=true'
    },
    {
      count: 0,
      name: 'Sleepy',
      imgSrc: 'https://github.com/udacity/ud989-cat-clicker-premium-vanilla/blob/master/img/9648464288_2516b35537_z.jpg?raw=true'
    }
  ]
}

const octopus = {
  init: function () {
    model.currentCat = model.cats[0]

    catView.init()
    catListView.init()
  },
  incrementCounter: function () {
    model.currentCat.count++
    catView.render()
  },
  getCurrentCat: function () {
    return model.currentCat
  },
  getCats: function () {
    return model.cats
  },
  setCurrentCat: function (cat) {
    model.currentCat = cat
  }
}

const catView = {
  init: function () {
    this.catElem = document.getElementById('cat')
    this.catNameElem = document.getElementById('cat-name')
    this.countElem = document.getElementById('cat-count')
    this.catImgElem = document.getElementById('cat-img')

    this.catImgElem.addEventListener('click', () => {
      octopus.incrementCounter()
    })

    this.render()
  },
  render: function () {
    const currentCat = octopus.getCurrentCat()
    this.catImgElem.src = currentCat.imgSrc
    this.catNameElem.textContent = currentCat.name
    this.countElem.textContent = currentCat.count
  }
}

const catListView = {
  init: function () {
    this.catListElem = document.getElementById('cat-list')
    this.render()
  },
  render: function () {
    // let cat
    const cats = octopus.getCats()
    this.catListElem.innerHTML = ''

    for (let i = 0; i < cats.length; i++) {
      let cat = cats[i]
      let elem = document.createElement('li')
      elem.textContent = cat.name

      elem.addEventListener('click', ((copyCat) => {
        return function () {
          octopus.setCurrentCat(copyCat)
          catView.render()
        }
      })(cat))
      this.catListElem.appendChild(elem)
    }
  }
}

octopus.init()
console.log(model.cats)