const According = () => {
  return (
    <div className="mt-8">
      <h2>Know about Frequently</h2>
      <h1 className="text-5xl text-gray-600"> asked questions</h1>

      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-xl font-medium">
          Q: How do I borrow a book from the library?
        </div>
        <div className="collapse-content">
          <p>
            A: To borrow a book, log in to your library account, search for the
            book you&apos;re interested in, and click on the &quot;Borrow&quot;
            button. The book will be checked out to your account, and you can
            pick it up from the library.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q: How long can I keep a borrowed book?
        </div>
        <div className="collapse-content">
          <p>
            A: The standard borrowing period for most books is 3 weeks. However,
            certain items may have shorter or longer loan periods. You can check
            the due date in your account.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q: Can I renew a borrowed book?
        </div>
        <div className="collapse-content">
          <p>
            Answer: If you lose or damage a borrowed book, please contact the
            library immediately. Depending on the extent of the damage or the
            availability of the book, you may be asked to pay for a replacement
            copy or cover the cost of repairs.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q: What should I do if I lose or damage a borrowed book?
        </div>
        <div className="collapse-content">
          <p>
            Answer: Yes, you can place a reservation on a book that is currently
            checked out by another member. Once the book is returned, you will
            be notified, and it will be held for you at your chosen pickup
            location.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">
          Q: How can I suggest a book for the library&apos;s collection?
        </div>
        <div className="collapse-content">
          <p>
            Answer: We welcome suggestions for new additions to our collection!
            You can submit your book recommendations through the &quot;Suggest a
            Book&quot; feature on our website. Our team will review the
            suggestions and consider them for acquisition.
          </p>
        </div>
      </div>
    </div>
  );
};

export default According;
