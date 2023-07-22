export interface Course {
    name: string;
    description: string;
    price: number;
  }

  export interface MenuSection {
    name: string;
    courses: Course[];
  }
  
export interface Menu {
    firstCourses: MenuSection;
    mainCourses: MenuSection;
    desserts: MenuSection;
  }

export const menu: Menu = {
    firstCourses: {
      name: '1) Resto House',
      courses: [
        {
          name: '7.5/10 Rated',
          description: 'Cafe',
          price: 700,
        },
        // {
        //   name: 'Leverpastejsmacka',
        //   description: 'Macka med leverpastej och saltgurka',
        //   price: 149,
        // },
      ],
    },
    mainCourses: {
      name: '2) House of Italiano',
      courses: [
        {
          name: '7.2/10 Rated',
          description: 'Italian cuisine',
          price: 600,
        },
        // {
        //   name: 'Flintastek',
        //   description: 'Flintastek med pommes frites och bearnaisesås',
        //   price: ,
        // },
      ],
    },
    desserts: {
      name: '3) Roti Wala ',
      courses: [
        {
          name: '8/10 Rated',
          description: 'Indian Cuisine',
          
          price:   500,
        },
        // {
        //   name: 'Kladdkaka',
        //   description: 'Kladdkaka. Gott!',
        //   price: 89,
        // },
      ],
    },
  };