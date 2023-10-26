import bank from "./bank.png";
import "./pages.css";

export function Home() {
  return (
    <div>
      <div className="card c-principal">
        <div className="card-body">
          <h5 className="card-title">WELCOME TO THE BANK</h5>
          <p className="card-text">
            For all your banking needs
          </p>
        </div>
        <img src={bank} alt="Application" className="card-img-top" />

      </div>
    </div>
  );
}
