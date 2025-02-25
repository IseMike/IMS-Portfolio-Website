function ContactMeButton({ isNewStyle }) {
      return (
            <div className="contact-me-container">
                  <div className="contact-me-content">
                        {isNewStyle ? (
                              <a href="mailto:shepherdi1998@gmail.com" className="new-contact-button">Email Me</a>
                        ) : (
                              <>
                                    <h2>Or you can contact me directly by email:</h2>
                                    <a href="mailto:shepherdi1998@gmail.com" className="contact-button">Tell me about yourself!</a>
                              </>
                        )}
                  </div>
            </div>
      );
}

export default ContactMeButton;