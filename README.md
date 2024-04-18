## ArtisanAxis Realty - Where Artistry Meets Architecture
- Type of Real Estate: **Specialty**
- It includes: Hospitals, Schools, Religious Facilities, Transportation Terminals, Convention Centers, Art Galleries etc.

### Firebase Live Site Link:
- [Firebase Live Site](https://artisan-axis.web.app/)

### Mentioned NPM Utility Packages Used in this Project:
- [aos](https://michalsnik.github.io/aos/) for On Scroll Animation
- [animate.css](https://animate.style/) for Animation Effects
- [react-leaflet](https://react-leaflet.js.org/) for Showing Map
- [react-hook-form](https://react-hook-form.com/) for Handling Forms
- [swiper](https://swiperjs.com/) for Slider/Swiper on Homepage Banner

### Other NPM Utility Packages Used in this Project:
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async) for Dynamic Page Title
- [react-icons](https://react-icons.github.io/react-icons/) for Showing Icons
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction) for Showing Toasts
- [react-tabs](https://www.npmjs.com/package/react-tabs) for Showing Tabs
- [react-fast-marquee](https://www.react-fast-marquee.com/) for Horizontal Auto-Scroll on Homepage in Reviews Section

### Notable Features of the Website:
- You can see **Buy Now/Rent Now** buttons on banner images on sliders based on if you can buy or rent them
- You'll see **R/S** on estate cards on homepage based on whether the estate is for sale or rent
- You'll notice green color-scheme for estates for sale or or orange for rent on these cards
- If you click on **View Property** and you're not logged in, you'll be redirected to login page. After successful login, you will be redirected to the desired estate details page
- On homepage, you can see a section titled **Our Services & Benefits** describing the benefits of this site
- Below that you will find another section titled **Reviews from Our Clients**. It will show reviews with stars with horizontal auto-scroll. You can point your mouse on a review and auto-scroll will pause.
- On **Estate Details** page, you can add an estate in your **Favorites** list for future observation, the data will be stored on local storage
- On **Estate Details** page, you'll see a button either as **Buy Now** or **Rent Now** and when you click on this button you'll see a confirmation pop-up modal
- If you have added an estate in favorite list previously, **Buy Now** or **Rent Now** button will remove that estate from favorite list with a toast
- On **Estate Details** page, there is a tab titled **Find on Map**, you can see the estate location from ***OpenStreetMap*** from this tab
- After adding estates in **Favorites**, if you refresh or reload the site, you'll see favorite estate counts as **Favorites <sup>1</sup>** on navbar
- You can remove estates from **Favorites** page by simply clicking on the **Remove from Favorites** button and it will remove the estate with a toast
- On **Contact** page you will find a contact form. If you're already logged in, your name and email will be there in the input fields by default. if you're not logged in, you have to input your name and email manually
- When you click on the **Send Message** button, it'll show you a pop-up modal
- On **Login** page, you can login using your email and password or with *Google*, *Facebook*, *Github* or *Twitter* account. There is also a redirect link to navigate you to the **Register** page if you need a new account
- After successful login, you'll see a toast 
- If your password and email do not match, you'll see an error message as toast. if there is other errors during login you'll also see those as toast
- On **Register** page, you must fill in all the fields. Your password should be 6 characters long and should contain at least an upper and a lower case letter. If you don't follow these, you'll notice error messages below the input fields
- After successful registration, you'll see a toast and you'll be redirected to login page
- There is a protected route (page) titled **Update Profile**. You can update your name and profile picture from this page
- If you click on the profile picture on the navbar it will take you to you *profile details* page. You can see your information there, i.e. your name, email, whether your email is verified or not, last log in time and account creation date.
- On **Navbar** beside your profile picture, you can see a logout icon. You can simply log out by clicking this icon
- **Update Profile**, **Favorites**, **Estate Details** and **User Profile (Profile Picture on Navbar)** - these are protected routes, meaning you cannot access these pages without logging in.
- You will notice animation effects on most of the pages of the site.
- If you enter any invalid URL suffix, you'll see a **404 Error Page**. This page has special animation effects 