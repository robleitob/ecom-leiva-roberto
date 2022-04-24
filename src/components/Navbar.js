import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <div>
            <div class="navbar bg-base-100">
                <div class="flex-1">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://st.depositphotos.com/1001877/3954/i/600/depositphotos_39547679-stock-photo-e-commerce-shopping-cart-with.jpg" />
                        </div>
                    </label>
                    <a class="btn btn-ghost normal-case text-xl">Inicio</a>
                    <a class="btn btn-ghost normal-case text-xl">Categorias</a>
                    <a class="btn btn-ghost normal-case text-xl">Reportes</a>
                    <a class="btn btn-ghost normal-case text-xl">Otros</a>
                </div>
                <CartWidget></CartWidget>
            </div>
        </div>
    )
}

export default Navbar;