import SubmitButton from "../Buttons/SubmitButton.jsx";
import ResetButton from "../Buttons/ResetButton.jsx";
import Input from "../Input/Input";
import Select from "../Select/Select";
import SelectR from "../SelectR/SelectR.jsx";
import "../../Style/utilities.scss";
import "./form.scss";

const Form = ({
  items,
  errors,
  onSubmit,
  handleChange,
  handleSelect,
  title,
  reset,
  buttomText,
  action,
}) => {
  return (
    <div className="form">
      <h1 className="mb-small">{title}</h1>
      <form className="form__content" onSubmit={(e) => onSubmit(e)}>
        {items?.map((item, index) => {
          switch (item.input) {
            case "input":
              return (
                <div className="mb-small" key={index}>
                  <Input
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
                </div>
              );
            case "select":
              return (
                <div className="mb-small" key={index}>
                  <Select
                    name={item.name}
                    options={item.options}
                    handleChange={handleChange}
                    error={errors[item.name]}
                    defaultText={item.defaultText}
                    defaultValue={item.defaultValue}
                    multiple={item.multiple}
                    disabled={item.disabled}
                  />
                </div>
              );

            case "multi-select":
              return (
                <div className="mb-small" key={index}>
                  <SelectR
                    isMulti
                    defaultText={item.defaultText}
                    onChange={handleChange}
                    options={item.options}
                    defaultValue={item.defaultValue}
                    handleChange={handleSelect}
                    error={errors[item.name]}
                    action={action}
                  />
                </div>
              );
            default:
              return <h1>hello</h1>;
          }
        })}

        <div className="form__submit mt-large">
          {reset && <ResetButton text="Reset" />}
          <SubmitButton text={buttomText ? buttomText : "Submit"} />
        </div>
      </form>
    </div>
  );
};

export default Form;
/* <div className="mb-small" key={index}>

      

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
                multiple={item.multiple}
                disabled={item.disabled}
              />
            )}
          </div>*/
