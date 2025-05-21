import { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  const allTags = Array.from(
    new Set(frameworkData.flatMap((framework) => framework.tags))
  );

  const filteredFrameworks = frameworkData.filter((framework) => {
    const _searchTerm = searchTerm.toLowerCase();
    const matchesSearch =
      framework.name.toLowerCase().includes(_searchTerm) ||
      framework.description.toLowerCase().includes(_searchTerm);

    const matchesTag = selectedTag
      ? framework.tags.includes(selectedTag)
      : true;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-8">
      <input
        type="text"
        name="searchTerm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search framework..."
        className="w-full p-2 border border-gray-300 rounded mb-4"
      />

      <select
        name="selectedTag"
        value={selectedTag}
        onChange={(e) => setSelectedTag(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-4"
      >
        <option value="">All Tags</option>
        {allTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>

      {filteredFrameworks.map((item, index) => (
        <div key={index} className="mb-4 border p-4 rounded shadow">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-gray-700">{item.description}</p>
          <div className="mt-2 text-sm text-blue-500">
            Tags: {item.tags.join(", ")}
          </div>
        </div>
      ))}
    </div>
  );
}
