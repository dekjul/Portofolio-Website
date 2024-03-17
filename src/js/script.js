// Stripe
const stripe = document.querySelector('#stripe');
const navMenu = document.querySelector('#nav-menu');

stripe.addEventListener('click', function(){
    stripe.classList.toggle('stripe-active');
    navMenu.classList.toggle('hidden');
})

// Navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    // Mengambil jarak posisi header dari top yaitu 0
    // Maka jika di scroll posisi header dari top akan bertambah
    const fixedNav = header.offsetTop;

    // Cek jika ada selisih antara ketika discroll dengan value dari fixedNav
    if (window.scrollY > fixedNav){
        // Tambahkan class baru ke Headernya
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
};