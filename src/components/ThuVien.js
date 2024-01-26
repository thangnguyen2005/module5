import React, { useState } from 'react';

function BookManagementApp() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [quantity, setQuantity] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === '') {
      alert('Tiêu đề là trường bắt buộc');
      return;
    }

    if (!Number.isInteger(Number(quantity))) {
      alert('Số lượng phải là một số');
      return;
    }

    const newBook = {
      title: title,
      quantity: parseInt(quantity),
    };

    if (selectedBook) {
      // Chỉnh sửa thông tin sách
      setBooks((prevBooks) =>
        prevBooks.map((book) => (book === selectedBook ? newBook : book))
      );
      setSelectedBook(null);
    } else {
      // Thêm thông tin sách
      setBooks((prevBooks) => [...prevBooks, newBook]);
    }

    setTitle('');
    setQuantity('');
  };

  const handleEdit = (book) => {
    setSelectedBook(book);
    setTitle(book.title);
    setQuantity(book.quantity.toString());
  };

  const handleDelete = (book) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b !== book));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Tiêu đề:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <label>
          Số lượng:
          <input type="text" value={quantity} onChange={handleQuantityChange} />
        </label>
        <button type="submit">{selectedBook ? 'Chỉnh sửa' : 'Thêm'}</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>Tiêu đề</th>
            <th>Số lượng</th>
            <th>Tùy chọn</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
            <tr key={index}>
              <td>{book.title}</td>
              <td>{book.quantity}</td>
              <td>
                <button onClick={() => handleEdit(book)}>Chỉnh sửa</button>
                <button onClick={() => handleDelete(book)}>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BookManagementApp;