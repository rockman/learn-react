import { useState, useEffect } from "react";

const useWidgets = () => {
    const [widgets, setWidgets] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        const r = await fetch("/data.json");
        const dataWidgets = await r.json();
        setWidgets(dataWidgets);
      };
      fetchData();
    }, []);
      
    return widgets;
}

export default useWidgets;
