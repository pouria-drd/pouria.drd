"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";

interface Option {
	value: string;
	label: string;
}

interface NavbarDropdownProps {
	options: Option[];
	defaultValue?: string;
	onValueChange?: (value: string) => void;
	label: string; // Label when nothing selected or as title
}

const NavbarDropdown = (props: NavbarDropdownProps) => {
	const router = useRouter();
	const currentLocale = useLocale();
	const { options, defaultValue, onValueChange, label } = props;
	const [selected, setSelected] = useState(defaultValue || "");

	const handleChange = (val: string) => {
		setSelected(val);
		router.push(val);
		if (onValueChange) onValueChange(val);
	};

	const selectedLabel =
		options.find((opt) => opt.value === selected)?.label || label;

	return (
		<DropdownMenu dir={currentLocale === "fa" ? "rtl" : "ltr"}>
			<DropdownMenuTrigger asChild>
				<Button
					size={"sm"}
					variant={"outline"}
					className="flex items-center justify-between min-w-24">
					{selectedLabel}
					<ChevronDown />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-44">
				<DropdownMenuLabel>{label}</DropdownMenuLabel>
				<DropdownMenuSeparator />
				<DropdownMenuRadioGroup
					value={selected}
					onValueChange={handleChange}>
					{options.map(({ value, label }) => (
						<DropdownMenuRadioItem key={value} value={value}>
							{label}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default NavbarDropdown;
