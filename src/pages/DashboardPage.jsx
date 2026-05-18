import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { PageHero } from "../components/ui/PageHero";
import { Wrap } from "../components/ui/Wrap";
import { useAuth } from "../context/AuthContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { usePageInner } from "../hooks/usePageInner";

export function DashboardPage() {
  usePageInner();
  useDocumentTitle("Account");
  const { isAuthenticated, signIn, signOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) signIn();
  };

  return (
    <>
      <PageHero
        compact
        eyebrow="Account"
        title={isAuthenticated ? "Welcome back" : "Log in or register"}
        lede={isAuthenticated ? "Demo account — bookings and favourites are stored locally." : "Sign in to save favourites and track bookings (demo)."}
      />
      <Wrap className="pb-16">
        {isAuthenticated ? (
          <div className="glass-panel max-w-lg p-8">
            <p className="text-muted">You are signed in with a demo session.</p>
            <ul className="mt-6 space-y-2 text-sm">
              <li>
                <Link to="/book" className="text-gold hover:underline">
                  Book a new visit
                </Link>
              </li>
              <li>
                <Link to="/checkout" className="text-gold hover:underline">
                  View cart
                </Link>
              </li>
              <li>
                <Link to="/#favorites" className="text-gold hover:underline">
                  Saved services
                </Link>
              </li>
            </ul>
            <Button type="button" variant="outline" className="mt-8" onClick={signOut}>
              Sign out
            </Button>
          </div>
        ) : (
          <form id="sign-in" onSubmit={handleSubmit} className="glass-panel max-w-md space-y-4 p-8">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink">
                Email
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gold/20 px-4 py-2.5 outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-ink">
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 w-full rounded-xl border border-gold/20 px-4 py-2.5 outline-none focus:border-gold"
              />
            </div>
            <Button type="submit" className="w-full justify-center">
              Log in (demo)
            </Button>
            <p className="text-center text-xs text-muted">Any email and password will sign you in for this demo.</p>
          </form>
        )}
      </Wrap>
    </>
  );
}
