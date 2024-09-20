import { useMemo } from "react";
const useFilterAndSort = (items, searchTerm, sortOption) => {
    return useMemo(() => {
      let result = items;
  
      if (searchTerm) {
        result = result.filter(item => 
          item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
  
      if (sortOption === 'name') {
        result = [...result].sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOption === 'description') {
        result = [...result].sort((a, b) => a.description.localeCompare(b.description));
      }
  
      return result;
    }, [items, searchTerm, sortOption]);
  };

  
  export default useFilterAndSort