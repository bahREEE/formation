import SubmitButton from "../Buttons/SubmitButton.jsx";
import ResetButton from "../Buttons/ResetButton.jsx";
import "../../Style/utilities.scss";
import "./form.scss";

const Form = ({ items, errors, onSubmit, handleChange, title }) => {
  return (
    <div className="form">
      <h1 className="mb-small">{title}</h1>
      <form className="form__content" onSubmit={(e) => onSubmit(e)}>
        {items?.map((item, index) => (
          <div className="mb-small" key={index}>
            {item.input === "input" ? (
              <item.Component
                name={item.name}
                id={item.id}
                disabled={item.disabled}
                type={item.type}
                placeholder={item.placeholder}
                required={item.required}
                handleChange={handleChange}
                error={errors[item.name]}
                defaultValue={item.defaultValue}
              />
            ) : (
              <item.Component
                name={item.name}
                options={item.options}
                handleChange={handleChange}
                error={errors[item.name]}
                defaultText={item.defaultText}
                defaultValue={item.defaultValue}
              />
            )}
          </div>
        ))}

        <div className="form__submit mt-large">
          <ResetButton text="Reset" />
          <SubmitButton text="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Form;
