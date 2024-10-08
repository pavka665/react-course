export default function Footer() {
    const hour = new Date().getHours();
    const openHour = 12;
    const closeHour = 22;
    const isOpen = hour >= openHour && hour <= closeHour;

    return (
        <footer className="footer">
            { isOpen ? (
                <div className="order">
                    <p>We are open until { openHour }:00. Come visit us or order online</p>
                    <button className="btn">Order</button>
                </div>
            ) : (
                <p>We are open between { openHour } and { closeHour }</p>
            )}
        </footer>
    )
}