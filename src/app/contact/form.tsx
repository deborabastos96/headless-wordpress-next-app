`use client`;

import Button from "../components/button";
import Fieldset from "../components/fieldset";
import Input from "../components/input";
import TextArea from "../components/textarea";

const INPUT = "INPUT";
const TEXTAREA = "TEXTAREA";

const fields = [
  {
    label: "Name",
    component: INPUT,
    type: "text",
    name: "full_name",
    id: "full_name",
  },
  {
    label: "Email",
    component: INPUT,
    type: "email",
    name: "email",
    id: "email",
  },
  {
    label: "Subject",
    component: INPUT,
    type: "text",
    name: "subject",
    id: "subject",
  },
  {
    label: "Message",
    component: TEXTAREA,
    type: "text",
    name: "message",
    id: "message",
  },
];

export default function Form() {
  return (
    <form className="flex flex-col">
      {fields.map((field) => (
        <Fieldset key={field.id}>
          {field.component === INPUT && (
            <Input
              type={field.type}
              name={field.name}
              id={field.id}
              placeholder={field.label}
            />
          )}
          {field.component === TEXTAREA && (
            <TextArea
              name={field.name}
              id={field.id}
              placeholder={field.label}
            />
          )}
        </Fieldset>
      ))}

      <Button type="submit" className="w-40">
        Submit
      </Button>
    </form>
  );
}
