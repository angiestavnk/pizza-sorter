import { Pizza, Size } from "./pizzaContext.types"

const pizzaMargheritaMedium: Pizza = {
  name: "Margarita",
  price: 1200,
  size: Size.Medium,
  deliveryTime: 45,
  ingredients: [
    {
      name: "Dough",
      imgUrl: "https://www.vkusnyblog.ru/wp-content/uploads/2008/05/osnovnoe-testo-dlya-pizzy.jpg"
    },
    {
      name: "Pizza sauce",
      imgUrl: "https://www.budgetbytes.com/wp-content/uploads/2011/08/Thick-Rich-Pizza-Sauce-finished.jpg"
    },
    {
      name: "Salt",
      imgUrl: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/02/TooMuchSodiuml-1051727580-770x533-1-650x428.jpg"
    },
    {
      name: "Cheese",
      imgUrl: "https://www.emborg.com/Admin/Public/getImage.ashx?Image=/Files/Images/Emborg/800x600/800x600_14_Speciality_Cheese.jpg&width=800"
    },
    {
      name: "Basil",
      imgUrl: "https://cdn-prod.medicalnewstoday.com/content/images/articles/266/266425/basil-in-a-bowel-on-a-table.jpg"
    },
    {
      name: "Mozarella",
      imgUrl: "https://dam.savencia.com/api/wedia/dam/transform/fix635d9eidk9g7476wksh8sknajyt6owsimkha/2000?t=resize&width=2000"
    }
  ]
}

const pizzaPepperoniLarge: Pizza = {
  name: "Pepperoni",
  price: 600,
  size: Size.Large,
  deliveryTime: 60,
  ingredients: [
    {
      name: "Dough",
      imgUrl: "https://www.vkusnyblog.ru/wp-content/uploads/2008/05/osnovnoe-testo-dlya-pizzy.jpg"
    },
    {
      name: "Pizza sauce",
      imgUrl: "https://www.budgetbytes.com/wp-content/uploads/2011/08/Thick-Rich-Pizza-Sauce-finished.jpg"
    },
    {
      name: "Salt",
      imgUrl: "https://health.clevelandclinic.org/wp-content/uploads/sites/3/2022/02/TooMuchSodiuml-1051727580-770x533-1-650x428.jpg"
    },
    {
      name: "Parmeggiano",
      imgUrl: "https://tuscookany.com/media/uploads/en/blogposts/big/Parmigiano_Reggiano_Tuscookany_blog_post_50.jpg"
    },
    {
      name: "Pepperoni",
      imgUrl: "https://assets.bonappetit.com/photos/615ef45230a120edc42ad1e8/1:1/w_1202,h_1202,c_limit/Pepperoni.jpg"
    },
    {
      name: "Mozarella",
      imgUrl: "https://dam.savencia.com/api/wedia/dam/transform/fix635d9eidk9g7476wksh8sknajyt6owsimkha/2000?t=resize&width=2000"
    }
  ]
}

const pizzaQuatroFormaggiSmall: Pizza = {
  name: "Quatro Formaggi",
  price: 600,
  size: Size.Small,
  deliveryTime: 30,
  ingredients: [
    {
      name: "Dough",
      imgUrl: "https://www.vkusnyblog.ru/wp-content/uploads/2008/05/osnovnoe-testo-dlya-pizzy.jpg"
    },
    {
      name: "Pizza sauce",
      imgUrl: "https://www.budgetbytes.com/wp-content/uploads/2011/08/Thick-Rich-Pizza-Sauce-finished.jpg"
    },
    {
      name: "Gorgonzola",
      imgUrl: "https://rms.condenast.it/rms/public/5d8/4d0/fa7/thumb_4123_1200_670_0_0_auto.jpg"
    },
    {
      name: "Parmeggiano",
      imgUrl: "https://tuscookany.com/media/uploads/en/blogposts/big/Parmigiano_Reggiano_Tuscookany_blog_post_50.jpg"
    },
    {
      name: "Goat cheese",
      imgUrl: "https://recipemarker.com/wp-content/uploads/2020/06/Goat-Cheese-Substitutes.jpg"
    },
    {
      name: "Mozarella",
      imgUrl: "https://dam.savencia.com/api/wedia/dam/transform/fix635d9eidk9g7476wksh8sknajyt6owsimkha/2000?t=resize&width=2000"
    }
  ]
}

const pizzaVegetarianLarge: Pizza = {
  name: "Vegetarian",
  price: 400,
  size: Size.Large,
  deliveryTime: 75,
  ingredients: [
    {
      name: "Dough",
      imgUrl: "https://www.vkusnyblog.ru/wp-content/uploads/2008/05/osnovnoe-testo-dlya-pizzy.jpg"
    },
    {
      name: "Pizza sauce",
      imgUrl: "https://www.budgetbytes.com/wp-content/uploads/2011/08/Thick-Rich-Pizza-Sauce-finished.jpg"
    },
    {
      name: "Bell pepper",
      imgUrl: "https://www.sheknows.com/wp-content/uploads/2018/08/agp3ud1pxxjzxlki1s2g.jpeg"
    },
    {
      name: "Broccoli",
      imgUrl: "https://www.healthifyme.com/blog/wp-content/uploads/2021/12/Health-Benefits-of-Broccoli-Nutritional-Value-and-Recipes.jpg"
    },
    {
      name: "Olives",
      imgUrl: "https://thekitchencommunity.org/wp-content/uploads/2020/12/Kalamata-Olives-Vs-Black-Olives-Whats-The-Difference-1200x675.jpg"
    },
    {
      name: "Tomatoes",
      imgUrl: "https://www.eatthis.com/wp-content/uploads/sites/4/2022/06/heirloom-tomatoes.jpg?quality=82&strip=all"
    },
    {
      name: "Cheddar",
      imgUrl: "https://cdn.cnn.com/cnnnext/dam/assets/200623110902-cheddar-cubes-super-169.jpg"
    },
  ]
}

const pizzaFunghiExtraLarge: Pizza = {
  name: "Funghi",
  price: 1000,
  size: Size.ExtraLarge,
  deliveryTime: 75,
  ingredients: [
    {
      name: "Dough",
      imgUrl: "https://www.vkusnyblog.ru/wp-content/uploads/2008/05/osnovnoe-testo-dlya-pizzy.jpg"
    },
    {
      name: "Pizza sauce",
      imgUrl: "https://www.budgetbytes.com/wp-content/uploads/2011/08/Thick-Rich-Pizza-Sauce-finished.jpg"
    },
    {
      name: "Olive oil",
      imgUrl: "https://cdn-prod.medicalnewstoday.com/content/images/articles/321/321246/olive-oil-in-a-bottle-which-may-be-used-on-the-face.jpg"
    },
    {
      name: "Champignons",
      imgUrl: "https://images.radio-canada.ca/q_auto,w_1200/v1/alimentation/ingredient/16x9/champignon-ingredients-mordu.jpg"
    },
    {
      name: "Parsley",
      imgUrl: "https://kitchenambition.b-cdn.net/wp-content/uploads/2021/11/parsley.jpg"
    },
    {
      name: "Mozarella",
      imgUrl: "https://dam.savencia.com/api/wedia/dam/transform/fix635d9eidk9g7476wksh8sknajyt6owsimkha/2000?t=resize&width=2000"
    }
  ]
}

export const getPizzaData = () => {
  const pizzaList: Pizza[] = [ pizzaMargheritaMedium, pizzaFunghiExtraLarge, pizzaPepperoniLarge, pizzaQuatroFormaggiSmall, pizzaVegetarianLarge ];

  return pizzaList;
}