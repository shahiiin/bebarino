import "./input-category.scss";
const InputCategory = () => {
  return (
    <div className="category-input">
      <input id="categoryInput" type="radio" name="categoryInput" />
      <label className="mr-auto" htmlFor="categoryInput">
        بسته سوغاتی‌های خوراکی
      </label>
    </div>
  );
};

export default InputCategory;
