
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
    { name: "Plan & Pricing", path: "/#pricing" },
    { name: "FAQ", path: "/faq" }
]

export default function Navbar() {
    const [active, setActive] = useState("Home");
    return (
        <div
            className="flex flex-col items-center pt-10 px-4 relative z-[9999]"
            style={{
                fontFamily: "Inter, sans-serif",
            }}
        >
            {/* Navbar */}
            <nav
                className="w-full max-w-4xl flex items-center justify-between px-6 py-3"
                style={{
                    background: "#111111",
                    border: "1px solid #E87811",
                    borderRadius: "9999px",
                    boxShadow: "0 0 24px rgba(232,120,17,0.25), 0 8px 32px rgba(0,0,0,0.6)",
                }}
            >
                {/* Logo */}
                <span
                    className="font-bold text-xl"

                >
                    Solsakhli
                </span>

                {/* Desktop Links */}

                <ul className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <li
                            key={link.name}
                            className="px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer text-gray-300"
                        >
                            <a href={link.path}>{link.name}</a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button
                    className="hidden md:block px-5 py-2 text-sm font-semibold transition-all duration-300 relative overflow-hidden"
                    style={{
                        background: "#000",
                        color: "#fff",
                        fontWeight: "700",
                        letterSpacing: "0.05em",
                        border: "1px solid rgba(232,120,17,0.5)",
                        borderRadius: "10px",
                        boxShadow: "0 0 12px rgba(232,120,17,0.2)",
                    }}
                    onMouseEnter={e => {
                        e.currentTarget.style.boxShadow = "0 0 20px rgba(232,120,17,0.4)";
                        e.currentTarget.style.borderColor = "#E87811";
                    }}
                    onMouseLeave={e => {
                        e.currentTarget.style.boxShadow = "0 0 12px rgba(232,120,17,0.2)";
                        e.currentTarget.style.borderColor = "rgba(232,120,17,0.5)";
                    }}
                >
                    {/* Top-left corner glow effect */}
                    <span
                        style={{
                            position: "absolute",
                            top: "-18px",
                            left: "-18px",
                            width: "48px",
                            height: "48px",
                            background: "radial-gradient(circle, rgba(232,120,17,0.85) 0%, rgba(232,120,17,0.3) 50%, transparent 70%)",
                            borderRadius: "50%",
                            pointerEvents: "none",
                        }}
                    />
                    <span style={{ position: "relative", zIndex: 1 }}>Contact Us</span>
                </button>
            </nav>
        </div>
    );
}