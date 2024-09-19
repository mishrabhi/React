const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>If you have any questions, feel free to reach out to us!</p>

      <h2>Contact Information:</h2>
      <ul>
        <li>
          <strong>Phone:</strong> +123 456 7890
        </li>
        <li>
          <strong>Email:</strong> info@example.com
        </li>
        <li>
          <strong>Address:</strong> 1234 Main Street, Anytown, USA
        </li>
      </ul>

      <h2>Send us a Message:</h2>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea placeholder="Your Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
