import { useMemo } from "react";

const useFeaturedWidget = (widgets) => {

    const featuredWidget = useMemo(() => {
        if (widgets.length) {
          const index = Math.floor(Math.random() * widgets.length);
          return widgets[index];
        }
      }, [widgets]);

    return featuredWidget;
}
 
export default useFeaturedWidget;