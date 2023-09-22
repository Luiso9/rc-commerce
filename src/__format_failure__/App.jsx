import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [count, setCount] = useState(0)

    return ( <
        >
        <body data-theme="pastel" class="bg-base-200">
    {/*HEADER*/}
    <header class=" inset-0 z-50 bg-base-200 backdrop-blur-lg">
        <nav class="mx-auto flex max-w-6xl gap-8 px-6 transition-all duration-200 ease-in-out lg:px-12 py-4">
            <div class="relative flex items-center">
                <a href="/">
                    <img src="../img/logo.png" loading="lazy" style="color:transparent" width="150" height="52"></a>
            </div>
            <ul class="hidden items-start justify-start gap-6 md:flex">
                <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                    <a href="#">Our Story</a>
                </li>
                <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                    <a href="#">Our Product</a>
                </li>
                <li class="pt-1.5 font-dm text-sm font-medium text-slate-700">
                    <a href="#">Contact</a>
                </li>
            </ul>
            <div class="flex-grow"></div>
            <div class="hidden items-center justify-center gap-6 md:flex">
                <a href="#" class="font-dm text-sm font-medium text-slate-700">Keranjang</a>
                <a href="#" class="rounded-md px-3 py-1.5 font-dm text-sm font-medium text-black">Profile
                </a>
            </div>
            <div class="relative flex items-center justify-center md:hidden">
                <button type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-auto text-slate-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                    </svg>
                </button>
            </div>
        </nav>
    </header>
    {/*LANDING PAGE*/}
    <section class="container mx-auto">
        <div class="hero min-h-screen bg-red-600">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src="../img/donat.png" class="max-w-md" loading="lazy" />
                <div class="flex grid ml-16 grid-rows-4">
                    <h1 class="text-5xl font-bold">Discover Our Delicious Donuts Today!</h1>
                    <p class="py-6">Our donuts are perfect for any occasion, whether you're grabbing <br> a quick breakfast on the go or ordering a dozen <br> for a special event.</p>
                    <button class="btn btn-primary w-52">Order Now</button>
                </div>
            </div>
        </div>
    </section>
    {/* CARD */}
    <div class="container mx-auto mt-4">
        <div class="join join-horizontal flex lg:flex-row-reverse items-center justify-center gap-2">
            <div class="card w-64 h-72 bg-red-200 shadow-md join-item">
                <figure class="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Fastest Delivery</h2>
                    <p>Get your donuts delivered hot and fresh.</p>
                </div>
            </div>
            <div class="card w-64 h-72 bg-pink-400 shadow-md join-item">
                <figure class="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Best Quality</h2>
                    <p>Experience the melt-in-your-mouth goodness of our donuts.</p>
                </div>
            </div>
            <div class="card w-64 h-72 bg-pink-400 shadow-md join-item">
                <figure class="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Delicious Taste</h2>
                    <p>Satisfy your sweet cravings with our irresistibly delicious donuts.</p>
                </div>
            </div>
            <div class="card w-64 h-72 bg-pink-400 shadow-xl join-item">
                <figure class="px-10 pt-10">
                    <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Best Ingredients</h2>
                    <p>Our donuts are made with the finest and freshest ingredients.</p>
                </div>
            </div>
        </div>
    </div>
</body> <
        />
    )
}

export default App