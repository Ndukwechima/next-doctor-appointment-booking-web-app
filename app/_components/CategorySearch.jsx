import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

function CategorySearch() {
  return (
    <section className="mt-10 items-center flex flex-col gap-2">
      <h2 className="font-bold text-4xl tracking-wide">
        <span className="text-primary">Search Doctors</span>
      </h2>
      <h4 className="text-gray-500 text-xl">
        Search Your Doctor and Book Appointment in one click
      </h4>

      <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
        <Input type="text" placeholder="Search.." />
        <Button type="submit">
          <Search className="h-4 w-4 mr-2" />
          Search
        </Button>
      </div>
    </section>
  );
}

export default CategorySearch;
