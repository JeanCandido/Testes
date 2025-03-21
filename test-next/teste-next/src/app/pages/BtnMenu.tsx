interface BtnMenuProps {
    label: string;
}

export default function BtnMenu({label}: BtnMenuProps) {
  return (
    <li>
        <button className=" p-2 hover:bg-amber-900 rounded">
            {label}
        </button>
    </li>
  );
}