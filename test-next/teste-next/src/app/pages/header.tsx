import BtnMenu from "./BtnMenu";

export default function Header() {
    return (
      <header className=" bg-amber-950 ">
        <ul className=" flex text-amber-50 p-3">
            <BtnMenu label="Home"></BtnMenu>
            <BtnMenu label="Services"></BtnMenu>
            <BtnMenu label="Objects"></BtnMenu>
        </ul>
      </header>
    );
  }
  