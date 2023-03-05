import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, createContext, useReducer, useEffect } from "react";

import Home from "./pages/Home";
import NotFound from "./components/layouts/NotFound";
import Essay from "./pages/Functionalities/Essay";
import Email from "./pages/Functionalities/Email";
import BlogArticle from "./pages/Functionalities/BlogArticle";
import SalesCopy from "./pages/Functionalities/SalesCopy";
import AdCopy from "./pages/Functionalities/AdCopy";
import ProductReview from "./pages/Functionalities/ProductReview";
import Ideas from "./pages/Functionalities/Ideas";
import CodeLookUp from "./pages/Functionalities/CodeLookUp";
import QandA from "./pages/Functionalities/QandA";
import { SidebarContext } from "./components/layouts/Sidebar";
import Signup from "./pages/auth/Signup";
import Login from "./pages/auth/Login";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { initialState } from "./Reducers/authReducer";
import { authReducer } from "./Reducers/authReducer";
import Settings from "./components/sections/Settings";
import Dashboard from "./pages/Dashboard";
import Billing from "./components/sections/Billing";
import BioGenerator from "./pages/Functionalities/BioGenerator";
import ArticleSummary from "./pages/Functionalities/ArticleSummary";
import BookSummary from "./pages/Functionalities/BookSummary";
import YoutubeTranscripts from "./pages/Functionalities/YoutubeTranscripts";
import YoutubeScripts from "./pages/Functionalities/YoutubeScripts";
import Rewritter from "./pages/Functionalities/Rewritter";
import EmailResponder from "./pages/Functionalities/EmailResponder";
import { fetchAuthUserGoogle, fetchAuthUser } from "./services/userService";
import MiniGpt from "./pages/Functionalities/MiniGpt";

export const UserContext = createContext();

function App() {
  const [open, setOpen] = useState(false);
  const [state, dispatch] = useReducer(authReducer, initialState);
  useEffect(() => {
    fetchAuthUserGoogle(dispatch)
    fetchAuthUser(dispatch)
  }, [])

  return (
    <div className="font-poppins">
      <Router>
        {/* <Header /> */}
        <UserContext.Provider value={{ state, dispatch }}>
          <SidebarContext.Provider value={{ open, setOpen }}>
            <ToastContainer />
            <Routes>
              <Route
                path="/*"
                element={state.user ?
                  <div className="relative px-8 py-4 sm:ml-64 bg-gray-100 min-h-screen">
                    <Routes>
                      <Route path="/settings" element={<Settings />} />
                      <Route path="/billing" element={<Billing />} />
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/success" element={<Dashboard />} />
                      <Route path="/essay" element={<Essay />} />
                      <Route path="/blog" element={<BlogArticle />} />
                      <Route path="/email" element={<Email />} />
                      <Route path="/sales-copy" element={<SalesCopy />} />
                      <Route path="/ask-anything" element={<MiniGpt />} />
                      <Route path="/ad-copy" element={<AdCopy />} />
                      <Route path="/rewriter" element={<Rewritter />} />
                      <Route path="/questions-answers" element={<QandA />} />
                      <Route path="/bio-generator" element={<BioGenerator />} />
                      <Route path="/article-summary" element={<ArticleSummary />} />
                      <Route path="/email-responder" element={<EmailResponder />} />
                      <Route path="/book-summary" element={<BookSummary />} />
                      <Route path="/youtube-transcripts" element={<YoutubeTranscripts />} />
                      <Route path="/youtube-scripts" element={<YoutubeScripts />} />
                      <Route path="/product-review" element={<ProductReview />} />
                      <Route path="/ideas" element={<Ideas />} />
                      <Route path="/code-generator" element={<CodeLookUp />} />
                    </Routes>
                  </div> : <Navigate to="/login" />
                }
              />
              <Route path="/sign-up" element={<Signup />} />
              <Route path="/sign-up/:referralId" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />

            </Routes>
          </SidebarContext.Provider>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
