## ArtisanAxis Realty - Where Artistry Meets Architecture
- Type of Real Estate: **Specialty**
- It includes: Hospitals, Schools, Religious Facilities, Transportation Terminals, Convention Centers, Art Galleries etc.

### Firebase Live Site Link:
- [Firebase Live Site](https://artisan-axis.web.app/)

### Required NPM Utility Packages Used in the Project:
- [aos](https://michalsnik.github.io/aos/)
- [animate.css](https://animate.style/)
- [react-leaflet](https://react-leaflet.js.org/)
- [react-hook-form](https://react-hook-form.com/)
- [swiper](https://swiperjs.com/)

### Other NPM Utility Packages Used in the Project:
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- [react-icons](https://react-icons.github.io/react-icons/)
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction)
- [react-tabs](https://www.npmjs.com/package/react-tabs)
- [react-fast-marquee](https://www.react-fast-marquee.com/)

### Notable Features of the Website:
- You can see **Buy Now/Rent Now** buttons on banner images on sliders based on if you can buy or rent them
- You'll see **R/S** on estate cards on homepage based on whether the estate is for sale or rent
- You'll see different colors for estates for sale or rent on these cards
- If you click on **View Property** and you're not logged in, you'll be redirected to login page. After successful login, you will be redirected to the desired estate details page
- On homepage, you can see a section titled **Our Services & Benefits**
- Below that you will find another section titled **Reviews from Our Clients**. It will show reviews with stars with horizontal auto-scroll. You can point your mouse on a review and auto-scroll will pause.
- You can add an estate in your favorites list for future observation from estate details page, the data will be stored on local storage
- On *estate details* page, you'll see a button either as **Buy Now/Rent Now** and when you click on this button you'll see a confirmation pop-up modal
- If you have added an estate in favorite list previously, **Buy Now** or **Rent Now** button will remove that estate from favorite list with a toast
- On *estate details* page, there is a tab titled **Find on Map**, you can see the estate location from *OpenStreet Map* from this tab
- After adding estates in **Favorites**, if you refresh or reload the site you'll see favorite estate counts as **Favorites <sup>1</sup>** on navbar
- You can remove estates from Favorites page by simply clicking on the **Remove from Favorites** button and it will show you a toast
- On contact page you will find a contact form. If you're logged in, your name and email will be there in the input fields otherwise you have to input your name and email manually
- When you click on the **Send Message** button, it'll show you a pop-up modal
- On login page, you can login using your email and password or with *Google*, *Facebook*, *Github* or *Twitter* account. There is also a redirect link to navigate you to **Register** page if you need a new account
- After successful login, you'll see a toast 
- If your password and email do not match you'll see an error message as toast. if there is other errors during login you'll see those as toast too
- On register page, you must choose all the fields and your password should be 6 characters long and should contain at least an upper and a lower case letter. If you don't follow this, you'll notice error messages below the input fields
- After Successful registration, you'll see a toast and you'll be redirected to login page
- There is a page titled **Update Profile**. You can update your name and profile picture from this page
- If you click on the profile picture on the navbar it will take you to you profile page. You can see your information there, i.e. your name, email, whether your email is verified or not, last log in time and account creation date.
- On navbar beside your profile picture, you can see a logout icon. You can simply logout by clicking this icon
- **Update Profile**, **Favorites**, **Estate Details** and **User Profile (Profile Picture on Navbar)** - these are protected routes, meaning you cannot access these pages without logging in.
- You will notice animation effects on most of the pages of the site