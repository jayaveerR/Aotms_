import { useCartStore } from "@/store/cartStore";
import { Link } from "react-router-dom";
import { Trash2, Wallet, ArrowRight, CreditCard } from "lucide-react";
import { Header } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect, useRef } from "react";
// import { Button } from "@/components/ui/button"; // Removed if no longer used, or keep if used elsewhere

const RazorpayButton = () => {
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/payment-button.js";
        script.dataset.payment_button_id = "pl_RzeeeGHTvAciZo";
        script.async = true;

        const form = formRef.current;
        if (form && !form.querySelector('script[src="https://checkout.razorpay.com/v1/payment-button.js"]')) {
            form.appendChild(script);
        }
    }, []);

    return <form ref={formRef} id="razorpay-form"></form>;
};

const Cart = () => {
    const { items, removeFromCart, clearCart } = useCartStore();
    const total = items.reduce((sum, item) => sum + (item.price || 0), 0);

    return (
        <div className="min-h-screen bg-slate-50 font-inter">
            <Header />
            <main className="container mx-auto px-4 pt-48 pb-20">
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">Enrollment Cart</h1>

                {items.length === 0 ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-slate-100">
                        <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Wallet className="w-10 h-10 text-slate-400" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 mb-2">Your cart is empty</h2>
                        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any courses yet. Explore our catalog to find the perfect course for your career.</p>
                        <Link to="/#courses" className="btn-primary inline-flex items-center gap-2">
                            Browse Courses <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-4">
                            {items.map((item) => (
                                <div key={item.id} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-center">
                                    <div className="w-20 h-20 bg-slate-100 rounded-xl overflow-hidden shrink-0">
                                        {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-bold text-slate-900 text-lg">{item.name}</h3>
                                        <p className="text-slate-500 text-sm">Online Course</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-lg text-slate-900">₹{item.price?.toLocaleString()}</p>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 text-sm hover:underline mt-1 flex items-center justify-end gap-1"
                                        >
                                            <Trash2 className="w-3.5 h-3.5" /> Remove
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="lg:col-span-1">
                            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 sticky top-32">
                                <h2 className="text-xl font-bold text-slate-900 mb-6">Confirmation / Enrollment Success</h2>
                                <div className="space-y-3 mb-6">
                                    <div className="flex justify-between text-lg font-black text-slate-900">
                                        <span>Total</span>
                                        <span>₹{total.toLocaleString()}</span>
                                    </div>
                                </div>

                                <div className="mt-6 flex justify-center">
                                    <RazorpayButton />
                                </div>
                                <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-400 font-medium">
                                    <CreditCard className="w-3 h-3" /> Secure Payment Gateway
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Cart; 
