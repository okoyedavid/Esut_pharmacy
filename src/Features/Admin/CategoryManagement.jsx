import { useState } from "react";
import { Plus, Edit, Trash, Save } from "lucide-react";
// Category Management Section
const CategoryManagement = () => {
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });

  const isLoading = false;

  const categories = [
    {
      active: true,
      createdAt: "2025-04-15T06:23:06.938Z",
      name: "Best Course Rep",
      description: "Most effective class representative",
    },
    {
      active: true,
      createdAt: "2025-04-15T06:23:06.938Z",
      name: "Finest Dressed",
      description: "Most stylish student",
    },
    {
      active: true,
      createdAt: "2025-04-15T06:23:06.938Z",
      name: "Most Social",
      description: "Most outgoing and sociable student",
    },
  ];

  const [editingCategory, setEditingCategory] = useState(categories);

  // Fetch categories
  //   const { data: categories, isLoading } = useQuery({
  //     queryKey: ["/api/categories"],
  //     queryFn: async () => {
  //       const response = await apiRequest("GET", "/api/categories");
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch categories");
  //       }
  //       return response.json();
  //     },
  //   });

  // Create category mutation
  //   const createCategory = useMutation({
  //     mutationFn: async (category) => {
  //       const response = await apiRequest("POST", "/api/categories", category);
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error || "Failed to create category");
  //       }
  //       return response.json();
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
  //       setNewCategory({ name: "", description: "" });
  //       toast({
  //         title: "Category Created",
  //         description: "The new category has been created successfully",
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         title: "Failed to Create Category",
  //         description: error.message,
  //         variant: "destructive",
  //       });
  //     },
  //   });

  // Update category mutation
  //   const updateCategory = useMutation({
  //     mutationFn: async (category) => {
  //       const response = await apiRequest(
  //         "PUT",
  //         `/api/categories/${category.id}`,
  //         {
  //           name: category.name,
  //           description: category.description,
  //           active: category.active,
  //         }
  //       );
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error || "Failed to update category");
  //       }
  //       return response.json();
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
  //       setEditingCategory(null);
  //       toast({
  //         title: "Category Updated",
  //         description: "The category has been updated successfully",
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         title: "Failed to Update Category",
  //         description: error.message,
  //         variant: "destructive",
  //       });
  //     },
  //   });

  function updateCategory() {}
  function deleteCategory() {}
  function createCategory() {}
  function handleDeleteCategory() {}
  function handleUpdateCategory() {}

  // Delete category mutation
  //   const deleteCategory = useMutation({
  //     mutationFn: async (categoryId) => {
  //       const response = await apiRequest(
  //         "DELETE",
  //         `/api/categories/${categoryId}`
  //       );
  //       if (!response.ok) {
  //         const errorData = await response.json();
  //         throw new Error(errorData.error || "Failed to delete category");
  //       }
  //       return response.json();
  //     },
  //     onSuccess: () => {
  //       queryClient.invalidateQueries({ queryKey: ["/api/categories"] });
  //       toast({
  //         title: "Category Deleted",
  //         description: "The category has been deleted successfully",
  //       });
  //     },
  //     onError: (error) => {
  //       toast({
  //         title: "Failed to Delete Category",
  //         description: error.message,
  //         variant: "destructive",
  //       });
  //     },
  //   });

  const handleCreateCategory = (e) => {
    e.preventDefault();
    //     if (!newCategory.name) return;
    //     createCategory.mutate(newCategory);
    //   };

    //   const handleUpdateCategory = (e) => {
    //     e.preventDefault();
    //     if (!editingCategory?.name || !editingCategory.id) return;
    //     updateCategory.mutate(editingCategory);
    //   };

    //   const handleDeleteCategory = (categoryId) => {
    //     if (window.confirm("Are you sure you want to delete this category?")) {
    //       deleteCategory.mutate(categoryId);
    //     }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Manage Categories</h3>

      {/* New Category Form */}
      <form onSubmit={handleCreateCategory} className="mb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="md:col-span-1">
            <input
              type="text"
              placeholder="Category Name"
              value={newCategory.name}
              onChange={(e) =>
                setNewCategory({ ...newCategory, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              required
            />
          </div>
          <div className="md:col-span-1">
            <input
              type="text"
              placeholder="Description"
              value={newCategory.description}
              onChange={(e) =>
                setNewCategory({ ...newCategory, description: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
            />
          </div>
          <div>
            <button
              type="submit"
              disabled={createCategory.isPending || !newCategory.name}
              className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium flex items-center justify-center disabled:opacity-70"
            >
              <Plus size={16} className="mr-1" />
              Add Category
            </button>
          </div>
        </div>
      </form>

      {/* Categories List */}
      {isLoading ? (
        <div className="text-center py-4">
          <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Loading categories...
          </p>
        </div>
      ) : categories && categories.length > 0 ? (
        <div className="border rounded-md overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {categories.map((category) => (
                <tr key={category.id}>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {editingCategory?.id === category.id ? (
                      <input
                        type="text"
                        value={editingCategory.name}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                        required
                      />
                    ) : (
                      <div className="text-sm font-medium">{category.name}</div>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    {editingCategory?.id === category.id ? (
                      <input
                        type="text"
                        value={editingCategory.description || ""}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      />
                    ) : (
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {category.description || "-"}
                      </div>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {editingCategory?.id === category.id ? (
                      <select
                        value={editingCategory.active ? "active" : "inactive"}
                        onChange={(e) =>
                          setEditingCategory({
                            ...editingCategory,
                            active: e.target.value === "active",
                          })
                        }
                        className="px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 text-xs rounded-full ${
                          category.active
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        {category.active ? "Active" : "Inactive"}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-right text-sm font-medium">
                    {editingCategory?.id === category.id ? (
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={handleUpdateCategory}
                          disabled={updateCategory.isPending}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300 disabled:opacity-50"
                        >
                          <Save size={18} />
                        </button>
                        <button
                          onClick={() => setEditingCategory(null)}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setEditingCategory(category)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteCategory(category.id)}
                          disabled={deleteCategory.isPending}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                        >
                          <Trash size={18} />
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center py-6 bg-gray-50 dark:bg-gray-700/30 rounded-md">
          <p className="text-gray-500 dark:text-gray-400">
            No categories found. Create your first category above.
          </p>
        </div>
      )}
    </div>
  );
};

export default CategoryManagement;
