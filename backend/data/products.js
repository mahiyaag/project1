const products = [
  {
    name: 'Tiered Puffed Sleeves Dress',
    image: '/images/dress1.webp',
    description:
      ' Fuchsia solid woven a-line dress, has a round neck, three-quarter sleeves, button closure, an attached lining, and flared hem',
    brand: 'street 9',
    category: 'Dresses',
    price: 2700,
    countInStock: 0,
    rating: 4.5,
    numReviews: 4,
  },
  {
    name: 'Women Black Printed Bodycon Dress',
    image: '/images/dress2.webp',
    description:
      ' Black and White printed woven bodycon dress, has a sweetheart neck, short sleeves, concealed zip closure, and straight hem',
    brand: 'Sera',
    category: 'Dresses',
    price: 2500,
    countInStock: 12,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Satin Maxi dress',
    image: '/images/dress3.webp',
    description:
      'Green solid maxi dress, has shoulder straps, concealed zip closure, an attached lining, and straight hem',
    brand: 'Sera',
    category: 'Dresses',
    price: 1500,
    countInStock: 2,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Satin Maxi dress',
    image: '/images/dress4.webp',
    description:
      'Black solid styled back knitted maxi dress, has a round neck, short sleeves, straight hem, slit on the front',
    brand: 'Urbanic',
    category: 'Dresses',
    price: 800,
    countInStock: 6,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Women Calf-Length dress',
    image: '/images/dress5.webp',
    description:
      'Black solid styled back knitted maxi dress, has a round neck, short sleeves, straight hem, slit on the front',
    brand: 'Urbanic',
    category: 'Dresses',
    price: 1200,
    countInStock: 6,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Regular Crop Top',
    image: '/images/top1.webp',
    description:
      'Red crop regular top, solid, round neck, long sleeves, knitted',
    brand: 'Urbanic',
    category: 'tops',
    price: 700,
    countInStock: 6,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Halter Neck fitted Top',
    image: '/images/top2.webp',
    description:
      'Pink Crop Fitted top Conversational print Halter neck Shoulder strap Cut out detail Ruched detail Woven',
    brand: 'Sera',
    category: 'tops',
    price: 800,
    countInStock: 8,
    rating: 3.5,
    numReviews: 7,
  },
  {
    name: 'Twisted Cropped Fitted top',
    image: '/images/top3.webp',
    description:
      'Mustard Yellow solid knitted cropped fitted top, has shoulder straps',
    brand: 'Sera',
    category: 'tops',
    price: 800,
    countInStock: 8,
    rating: 3.5,
    numReviews: 7,
  },
  {
    name: 'Crop Back styled top',
    image: '/images/top4.webp',
    description:
      'Green and white striped woven styled back crop top, has a round neck, sleeveless, button closures',
    brand: 'Sassafras',
    category: 'tops',
    price: 950,
    countInStock: 8,
    rating: 3,
    numReviews: 3,
  },
  {
    name: 'Crop Back styled top',
    image: '/images/top5.webp',
    description:
      'Black solid knitted fitted top, has an one shoulder, long sleeves',
    brand: 'Urbanic',
    category: 'tops',
    price: 700,
    countInStock: 9,
    rating: 2,
    numReviews: 5,
  },
  {
    name: 'Women Flared Jeans',
    image: '/images/pants1.webp',
    description:
      'Blue light wash 5-pocket mid-rise jeans, slash knee, light fade, has a button and zip closure, and waistband with belt loops',
    brand: 'Urbanic',
    category: 'Pants',
    price: 900,
    countInStock: 9,
    rating: 2,
    numReviews: 5,
  },
  {
    name: 'Women Relaxed Fit Jeans',
    image: '/images/pants2.webp',
    description:
      'Lavender coloured wash 2-pocket mid-rise pleated jeans, clean look, no fade, has a button and zip closure, and partially elasticated waistband with belt loops',
    brand: 'Sassafras',
    category: 'Pants',
    price: 843,
    countInStock: 9,
    rating: 4,
    numReviews: 7,
  },
  {
    name: 'Women Regular Fit Jeans',
    image: '/images/pants3.webp',
    description:
      'Black dark wash 2-pocket mid-rise slouchy jeans, clean look, no fade, and has a button and zip closure',
    brand: 'Street 9',
    category: 'Pants',
    price: 930,
    countInStock: 9,
    rating: 2,
    numReviews: 5,
  },
  {
    name: 'Women Relaxed Fit High Rise jeans',
    image: '/images/pants4.jpeg',
    description:
      'Coloured no fade purple jeans Relaxed fit High-rise Clean look Non stretchable 5 pocket Length: cropped',
    brand: 'Sassafras',
    category: 'Pants',
    price: 740,
    countInStock: 20,
    rating: 3.8,
    numReviews: 5,
  },
  {
    name: 'Women Bell Bottom Jeans',
    image: '/images/pants5.webp',
    description:
      'Maroon coloured wash 4-pocket mid-rise bell bottom jeans with side taping, clean look, no fade, has a button and zip closure, and waistband with belt loops',
    brand: 'Tokyo Talkies',
    category: 'Pants',
    price: 1230,
    countInStock: 20,
    rating: 2.8,
    numReviews: 7,
  },
  {
    name: 'Women Midi A-Line skirt',
    image: '/images/skirt1.webp',
    description:
      'Green checked midi a-line skirt, each has an elasticated waistband with slip-on closure, and straight hem',
    brand: 'Tokyo Talkies',
    category: 'Skirts',
    price: 1300,
    countInStock: 10,
    rating: 4.3,
    numReviews: 2,
  },
  {
    name: 'Floral Lehenga skirt',
    image: '/images/skirt2.webp',
    description:
      'Mustard yellow and pink floral print lehenga skirt, has a partially elasticated waistband with hook and bar and zip closure, flared hem, attached lining',
    brand: 'Studio Srinagar',
    category: 'Skirts',
    price: 1100,
    countInStock: 13,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'A-Line Pure Cotton Skirt',
    image: '/images/skirt3.webp',
    description:
      'Green and navy blue checked A-line skirt with pleated detail, has a waistband, a zip closure on the side, flared hem',
    brand: 'Sassafras',
    category: 'Skirts',
    price: 1000,
    countInStock: 10,
    rating: 3,
    numReviews: 3,
  },
  {
    name: 'Foil Print Maxi skirt',
    image: '/images/skirt4.webp',
    description:
      'Pink and golden foil print maxi skirt, has a concealed zip and drawstring closure, and flared hem',
    brand: 'Sassafras',
    category: 'Skirts',
    price: 2000,
    countInStock: 10,
    rating: 4.3,
    numReviews: 4,
  },
  {
    name: 'A-Line Long skirt',
    image: '/images/skirt5.webp',
    description:
      'Burgundy solid A-line skirt, has a waistband with a zip closure, straight hem and has no lining',
    brand: 'Tokyo Talkies',
    category: 'Skirts',
    price: 1200,
    countInStock: 10,
    rating: 4,
    numReviews: 4,
  },
  {
    name: 'Women Rapid Dry sports shorts',
    image: '/images/shorts1.webp',
    description:
      'Flaunt a dynamic look while you run with the HRX Women Running Shorts. Its flat locked seams and polyester elastane fabric feels soft while a hidden pocket keeps your essentials at hand',
    brand: 'Tokyo Talkies',
    category: 'Shorts',
    price: 1100,
    countInStock: 11,
    rating: 3,
    numReviews: 2,
  },
  {
    name: 'Women Regular Fit Denim shorts',
    image: '/images/shorts2.jpeg',
    description:
      'Blue solid mid-rise denim shorts, has 5 pockets, and button closure',
    brand: 'Roadster',
    category: 'Shorts',
    price: 900,
    countInStock: 9,
    rating: 3,
    numReviews: 2,
  },
  {
    name: 'Women capry Shorts',
    image: '/images/shorts3.webp',
    description:
      'Green solid mid-rise regular shorts, has 2 pockets, hook closure',
    brand: 'Zalora Work',
    category: 'Shorts',
    price: 1000,
    countInStock: 9,
    rating: 3,
    numReviews: 2,
  },
  {
    name: 'Women Cotton Regular Shorts',
    image: '/images/shorts4.jpeg',
    description:
      'Teal green solid high-rise regular shorts, has 2 pockets, and hook closure',
    brand: 'Sassafras',
    category: 'Shorts',
    price: 900,
    countInStock: 10,
    rating: 4.8,
    numReviews: 2,
  },
  {
    name: 'Women Cardio Training Shorts',
    image: '/images/shorts5.webp',
    description:
      'Black solid tight shorts has skinny fit High Waist Breathable, quick-drying fabric keeps you dry Opaque fabric that would not be see-through, even when stretched',
    brand: 'Decathlon',
    category: 'Shorts',
    price: 1000,
    countInStock: 10,
    rating: 4.8,
    numReviews: 3,
  },
  {
    name: 'Men Olive Green Solid Polo Collar T-shirt',
    image: '/images/tshirt1.jpeg',
    description:
      'Olive green Tshirt for men, Solid, Regular length, Polo collar, Short, regular sleeves, Knitted cotton fabric, Button closure',
    brand: 'Nautica',
    category: 'T-Shirt',
    price: 1000,
    countInStock: 20,
    rating: 4.8,
    numReviews: 3,
  },
  {
    name: 'Men Black Brand Logo Printed T-shirt',
    image: '/images/tshirt2.jpeg',
    description:
      'Black Tshirt for men, Brand logo printed, Regular length,  Round neck, Short, regular sleeves, Knitted cotton fabric',
    brand: 'Levis',
    category: 'T-Shirt',
    price: 2000,
    countInStock: 20,
    rating: 4.8,
    numReviews: 3,
  },
  {
    name: 'Men White Mandarin Collar T-shirt',
    image: '/images/tshirt3.webp',
    description:
      'White Tshirt for men, Solid Regular length, Mandarin collar, Short, regular sleeves, Knitted cotton fabric, Button closure',
    brand: 'Puma',
    category: 'T-Shirt',
    price: 2500,
    countInStock: 20,
    rating: 4.8,
    numReviews: 3,
  },

  {
    name: 'Men Navy Blue Striped Mandarin Collar Applique T-shirt',
    image: '/images/tshirt4.webp',
    description:
      'Navy blue Tshirt for men, Colourblocked striped, Regular length, Mandarin collar, Short, regular sleeves, Knitted cotton fabric',
    brand: 'Duke',
    category: 'T-Shirt',
    price: 800,
    countInStock: 20,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Men Mauve Polo Collar T-shirt',
    image: '/images/tshirt5.webp',
    description:
      'Mauve Tshirt for men, Solid, Regular length, Polo collar, Short, regular sleeves, Button closure',
    brand: 'Louis Philippe Sport',
    category: 'T-Shirt',
    price: 800,
    countInStock: 20,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Men Olive Green Pure Cotton Cargo Shorts',
    image: '/images/mshorts1.jpeg',
    description:
      'Olive green solid mid-rise cargo shorts, has 4 pockets, drawstring closure',
    brand: 'Aeropostale',
    category: 'Shorts',
    price: 900,
    countInStock: 20,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Men Navy Blue Solid Regular Fit PERFORMANCE KNIT Dry Cell Training Sports Shorts',
    image: '/images/mshorts2.jpeg',
    description:
      'Navy Blue solid mid-rise sports shorts, has 2 pockets, slip-on closure',
    brand: 'Puma',
    category: 'Shorts',
    price: 870,
    countInStock: 20,
    rating: 4,
    numReviews: 3,
  },
  {
    name: 'Men 500 Day Blue Pure Cotton Shorts',
    image: '/images/mshorts3.webp',
    description:
      'Blue mid-rise regular shorts, has 3 pockets, elasticated closure',
    brand: 'Damensch',
    category: 'Shorts',
    price: 1000,
    countInStock: 20,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Men Grey Mid-Rise Regular Shorts With Logo Print',
    image: '/images/mshorts4.webp',
    description:
      'Grey solid mid-rise regular shorts, has 3 pockets, drawstring closure, and logo print',
    brand: 'Calvin Klein Jeans',
    category: 'Shorts',
    price: 700,
    countInStock: 20,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Men White Mid-Rise Regular Shorts',
    image: '/images/mshorts5.webp',
    description:
      'Grey solid mid-rise regular shorts, has 3 pockets, drawstring closure, and logo print',
    brand: 'Calvin Klein Jeans',
    category: 'Shorts',
    price: 2300,
    countInStock: 20,
    rating: 4,
    numReviews: 1,
  },
  {
    name: 'Men Coral Red Solid Pullover',
    image: '/images/sweater1.jpeg',
    description:
      'Coral red solid pullover, has a V-neck, long sleeves, and a ribbed hem',
    brand: 'Monte Carlo',
    category: 'Sweater',
    price: 600,
    countInStock: 2,
    rating: 4.5,
    numReviews: 23,
  },
  {
    name: 'Men Violet Self Design Pullover Sweater',
    image: '/images/sweater2.jpeg',
    description:
      'Violet self-design pullover sweater, has a V-neck, long sleeves, and ribbed hem',
    brand: 'Raymond',
    category: 'Sweater',
    price: 1000,
    countInStock: 2,
    rating: 4.5,
    numReviews: 23,
  },
  {
    name: 'Men Green Fine-knit jumper',
    image: '/images/sweater3.webp',
    description:
      'Jumper in a soft, fine cotton knit with a round neck, long sleeves and ribbing at the cuffs and hem.',
    brand: 'H&M',
    category: 'Sweater',
    price: 800,
    countInStock: 2,
    rating: 4.5,
    numReviews: 2,
  },
  
  {
    name: 'Men Green Solid Pullover',
    image: '/images/sweater4.jpeg',
    description:
      'Green solid pullover with embroidered detail, has a V-neck, long sleeves, ribbed hem',
    brand: 'Nautica',
    category: 'Sweater',
    price: 1420,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  
  {
    name: 'Men Grey Melange Solid Pullover',
    image: '/images/sweater5.webp',
    description:
      'Grey melange solid pullover, has a V-neck, long sleeves, ribbed hem',
    brand: 'Van Heusen',
    category: 'Sweater',
    price: 1220,
    countInStock: 2,
    rating: 0,
    numReviews: 0,
  },
  
  {
    name: 'Men Pink Slim Fit Textured Pure Cotton Formal Shirt',
    image: '/images/shirts1.webp',
    description:
      'Pink textured self design opaque formal shirt, has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem',
    brand: 'Raymond ',
    category: 'Shirts',
    price: 570,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Blue Slim Fit Checked Formal Shirt',
    image: '/images/shirts2.jpeg',
    description:
      'Blue other checks checked opaque Formal shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, curved hem',
    brand: 'Louis Philippe',
    category: 'Shirts',
    price: 900,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Blue Slim Fit Formal Shirt',
    image: '/images/shirts3.webp',
    description:
      'Blue solid opaque formal shirt , has a spread collar, button placket, 1 patch pocket, long regular sleeves, and a curved hem',
    brand: 'Park Avenue',
    category: 'Shirts',
    price: 900,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men White Slim Fit Opaque Geometric Printed Formal Shirt',
    image: '/images/shirts4.webp',
    description:
      'White geometric printed opaque Formal shirt ,has a spread collar, button placket, 1 patch pocket, long regular sleeves, straight hem',
    brand: 'Arrow Sport',
    category: 'Shirts',
    price: 2000,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Pink Solid Premium Cotton Formal Shirt',
    image: '/images/shirts5.jpeg',
    description:
      'Pink solid opaque formal shirt ,has a spread collar, button placket, 1 patch pocket, long roll-up sleeves, straight hem',
    brand: 'Louis Philippe',
    category: 'Shirts',
    price: 2000,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Beige Solid Tailored Jacket',
    image: '/images/jacket1.webp',
    description:
      'Beige solid tailored jacket, has a mock collar, 2 pockets, has a zip closure, long sleeves, straight hemline, polyester lining',
    brand: 'Arrow',
    category: 'Jackets',
    price: 1200,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Olive Green & Black Suede Finish Bomber Jacket',
    image: '/images/jacket2.webp',
    description:
      'Olive green and black solid bomber jacket, has a mock collar, 2 pockets ,has a zip closure, long sleeves, straight hemline, polyester lining',
    brand: 'ether',
    category: 'Jackets',
    price: 1400,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Brown & Taupe Solid Reversible Quilted Jacket',
    image: '/images/jacket3.webp',
    description:
      'Brown solid outer jacket, has a stand collar, 4 pockets, zip closure, long sleeves, and straight hem, Taupe solid inner quilted jacket, has a stand collar, 2 pockets, zip closure, long sleeves, and straight hem',
    brand: 'Louis Philippe Sport',
    category: 'Jackets',
    price: 1800,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Black Training or Gym Puffer Jacket',
    image: '/images/jacket4.webp',
    description:
      'Brown solid outer jacket, has a stand collar, 4 pockets, zip closure, long sleeves, and straight hem, Taupe solid inner quilted jacket, has a stand collar, 2 pockets, zip closure, long sleeves, and straight hem',
    brand: 'Louis Philippe Sport',
    category: 'Jackets',
    price: 2000,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
  {
    name: 'Men Black Crop Training or Gym Padded Jacket',
    image: '/images/jacket5.webp',
    description:
      'Black checked solid padded jacket with zip detail, has a hooded, 2 pockets ,has a zip closure, long sleeves, hem with toggle hemline, polyester lining',
    brand: 'Louis Philippe Sport',
    category: 'Jackets',
    price: 700,
    countInStock: 10,
    rating: 0,
    numReviews: 0,
  },
]

export default products
