import { useState, useEffect } from "react";
import { useUpdate } from "@/components/fragments/forms/FormProduct";

const useSelect = () => {
  const { data } = useUpdate();

  const [role, setRole] = useState("");
  const [gender, setGender] = useState("");
  const [position, setPosition] = useState("");
  const [category, setCategory] = useState("");
  const [unit, setUnit] = useState("");

  useEffect(() => {
    if (data) {
      setRole(data.role);
      setCategory(data.category || "Material Bangunan");
      setUnit(data.unit || "Buah");
    }
  }, [data]);

  const handleChangeRole = (value) => {
    setRole(value);
  };

  const handleChangeGender = (value) => {
    setGender(value);
  };

  const handleChangePosition = (value) => {
    setPosition(value);
  };

  const handleChangeCategory = (value) => {
    setCategory(value);
  };

  const handleChangeUnit = (value) => {
    setUnit(value);
  };

  return {
    role,
    gender,
    position,
    category,
    unit,
    handleChangeRole,
    handleChangeGender,
    handleChangePosition,
    handleChangeCategory,
    handleChangeUnit,
  };
};

export default useSelect;
