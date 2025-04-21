import { Edit, Plus, Trash, User } from "lucide-react";
import { useState } from "react";

const ContestantManagement = () => {
  const [newContestant, setNewContestant] = useState({
    name: "",
    categoryId: "",
    imageUrl: "",
    description: "",
  });
  const contestants = [
    {
      name: "John Doe",
      categoryId: 1,
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      description: "Final year student",
      voteData: { contestantId: 4, voteCount: 5 },
    },
    {
      name: "Jane Smith",
      categoryId: 1,
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      description: "3rd year student",
      voteData: { contestantId: 3, voteCount: 5 },
    },
    {
      name: "Mike Johnson",
      categoryId: 2,
      imageUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61",
      description: "Fashion enthusiast",
      voteData: { contestantId: 9, voteCount: 5 },
    },
    {
      name: "Sara Williams",
      categoryId: 2,
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      description: "Style icon",
      voteData: { contestantId: 2, voteCount: 5 },
    },
    {
      name: "Alex Brown",
      categoryId: 3,
      imageUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
      description: "Event organizer",
      voteData: { contestantId: 99, voteCount: 5 },
    },
    {
      name: "Lisa Green",
      categoryId: 3,
      imageUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
      description: "Social media star",
      voteData: { contestantId: 21, voteCount: 5 },
    },
  ];

  const [editingContestant, setEditingContestant] = useState(contestants);

  const loadingContestants = false;

  // Fetch contestants
  // const { data: contestants, isLoading: loadingContestants } = useQuery({
  //   queryKey: ["/api/contestants"],
  //   queryFn: async () => {
  //     const response = await apiRequest("GET", "/api/contestants");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch contestants");
  //     }
  //     return response.json();
  //   },
  // });

  // // Fetch categories for dropdown
  // const { data: categories } = useQuery({
  //   queryKey: ["/api/categories"],
  //   queryFn: async () => {
  //     const response = await apiRequest("GET", "/api/categories");
  //     if (!response.ok) {
  //       throw new Error("Failed to fetch categories");
  //     }
  //     return response.json();
  //   },
  // });

  // // Create contestant mutation
  // const createContestant = useMutation({
  //   mutationFn: async (contestant: {
  //     name: string,
  //     categoryId,
  //     imageUrl?: string,
  //     description?: string,
  //   }) => {
  //     const response = await apiRequest("POST", "/api/contestants", contestant);
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.error || "Failed to create contestant");
  //     }
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["/api/contestants"] });
  //     setNewContestant({
  //       name: "",
  //       categoryId: "",
  //       imageUrl: "",
  //       description: "",
  //     });
  //     toast({
  //       title: "Contestant Created",
  //       description: "The new contestant has been added successfully",
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Failed to Create Contestant",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  // });

  // // Update contestant mutation
  // const updateContestant = useMutation({
  //   mutationFn: async (contestant) => {
  //     const response = await apiRequest(
  //       "PUT",
  //       `/api/contestants/${contestant.id}`,
  //       {
  //         name: contestant.name,
  //         categoryId: contestant.categoryId,
  //         imageUrl: contestant.imageUrl,
  //         description: contestant.description,
  //       }
  //     );
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.error || "Failed to update contestant");
  //     }
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["/api/contestants"] });
  //     setEditingContestant(null);
  //     toast({
  //       title: "Contestant Updated",
  //       description: "The contestant has been updated successfully",
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Failed to Update Contestant",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  // });

  // // Delete contestant mutation
  // const deleteContestant = useMutation({
  //   mutationFn: async (contestantId) => {
  //     const response = await apiRequest(
  //       "DELETE",
  //       `/api/contestants/${contestantId}`
  //     );
  //     if (!response.ok) {
  //       const errorData = await response.json();
  //       throw new Error(errorData.error || "Failed to delete contestant");
  //     }
  //     return response.json();
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries({ queryKey: ["/api/contestants"] });
  //     toast({
  //       title: "Contestant Deleted",
  //       description: "The contestant has been deleted successfully",
  //     });
  //   },
  //   onError: (error) => {
  //     toast({
  //       title: "Failed to Delete Contestant",
  //       description: error.message,
  //       variant: "destructive",
  //     });
  //   },
  // });

  // const handleCreateContestant = (e) => {
  //   e.preventDefault();
  //   if (!newContestant.name || !newContestant.categoryId) return;

  //   createContestant.mutate({
  //     ...newContestant,
  //     categoryId: parseInt(newContestant.categoryId),
  //   });
  // };

  // const handleUpdateContestant = (e) => {
  //   e.preventDefault();
  //   if (
  //     !editingContestant?.name ||
  //     !editingContestant.id ||
  //     !editingContestant.categoryId
  //   )
  //     return;

  //   updateContestant.mutate(editingContestant);
  // };

  // const handleDeleteContestant = (contestantId) => {
  //   if (window.confirm("Are you sure you want to delete this contestant?")) {
  //     deleteContestant.mutate(contestantId);
  //   }
  // };

  // // Find category name by id
  // const getCategoryName = (categoryId) => {
  //   if (!categories) return "Unknown";
  //   const category = categories.find((c) => c.id === categoryId);
  //   return category ? category.name : "Unknown";
  // };

  function deleteContestant() {}

  function handleUpdateContestant() {}

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

  function handleCreateContestant() {}
  function handleDeleteContestant() {}
  function createContestant() {}
  function getCategoryName() {}
  function updateContestant() {}
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6">
      <h3 className="text-xl font-bold mb-4">Manage Contestants</h3>

      {/* New Contestant Form */}
      <form
        onSubmit={handleCreateContestant}
        className="mb-6 p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Contestant Name"
              value={newContestant.name}
              onChange={(e) =>
                setNewContestant({ ...newContestant, name: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              required
            />
          </div>
          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium mb-1"
            >
              Category
            </label>
            <select
              id="category"
              value={newContestant.categoryId}
              onChange={(e) =>
                setNewContestant({
                  ...newContestant,
                  categoryId: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
              required
            >
              <option value="">Select Category</option>
              {categories &&
                categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium mb-1"
            >
              Image URL
            </label>
            <input
              type="text"
              id="imageUrl"
              placeholder="Image URL (optional)"
              value={newContestant.imageUrl}
              onChange={(e) =>
                setNewContestant({ ...newContestant, imageUrl: e.target.value })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium mb-1"
            >
              Description
            </label>
            <input
              type="text"
              id="description"
              placeholder="Brief description (optional)"
              value={newContestant.description}
              onChange={(e) =>
                setNewContestant({
                  ...newContestant,
                  description: e.target.value,
                })
              }
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={
              createContestant.isPending ||
              !newContestant.name ||
              !newContestant.categoryId
            }
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md font-medium flex items-center disabled:opacity-70"
          >
            <Plus size={16} className="mr-1" />
            Add Contestant
          </button>
        </div>
      </form>

      {/* Contestants List */}
      {loadingContestants ? (
        <div className="text-center py-4">
          <div className="animate-spin h-6 w-6 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"></div>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Loading contestants...
          </p>
        </div>
      ) : contestants && contestants.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contestants.map((contestant) => (
            <div
              key={contestant.id}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <div className="h-40 overflow-hidden bg-gray-200 dark:bg-gray-700">
                <img
                  src={
                    contestant.imageUrl ||
                    "https://images.unsplash.com/photo-1566753323558-f4e0952af115"
                  }
                  className="w-full h-full object-cover"
                />
              </div>

              {editingContestant?.id === contestant.id ? (
                <div className="p-4">
                  <form onSubmit={handleUpdateContestant}>
                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        value={editingContestant.name}
                        onChange={(e) =>
                          setEditingContestant({
                            ...editingContestant,
                            name: e.target.value,
                          })
                        }
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1">
                        Category
                      </label>
                      <select
                        value={editingContestant.categoryId}
                        onChange={(e) =>
                          setEditingContestant({
                            ...editingContestant,
                            categoryId: parseInt(e.target.value),
                          })
                        }
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                        required
                      >
                        {categories &&
                          categories.map((category) => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                      </select>
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1">
                        Image URL
                      </label>
                      <input
                        type="text"
                        value={editingContestant.imageUrl || ""}
                        onChange={(e) =>
                          setEditingContestant({
                            ...editingContestant,
                            imageUrl: e.target.value,
                          })
                        }
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      />
                    </div>

                    <div className="mb-3">
                      <label className="block text-sm font-medium mb-1">
                        Description
                      </label>
                      <input
                        type="text"
                        value={editingContestant.description || ""}
                        onChange={(e) =>
                          setEditingContestant({
                            ...editingContestant,
                            description: e.target.value,
                          })
                        }
                        className="w-full px-2 py-1 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-700"
                      />
                    </div>

                    <div className="flex justify-end space-x-2">
                      <button
                        type="button"
                        onClick={() => setEditingContestant(null)}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded-md"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={updateContestant.isPending}
                        className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md disabled:opacity-70"
                      >
                        {updateContestant.isPending ? "Saving..." : "Save"}
                      </button>
                    </div>
                  </form>
                </div>
              ) : (
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold text-lg">{contestant.name}</h4>
                    <div className="flex space-x-1">
                      <button
                        onClick={() => setEditingContestant(contestant)}
                        className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDeleteContestant(contestant.id)}
                        disabled={deleteContestant.isPending}
                        className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 disabled:opacity-50"
                      >
                        <Trash size={16} />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {contestant.description || "No description"}
                  </p>
                  <div className="text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 px-2 py-1 rounded inline-block">
                    {getCategoryName(contestant.categoryId)}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 bg-gray-50 dark:bg-gray-700/30 rounded-md">
          <User size={32} className="mx-auto text-gray-400 mb-2" />
          <p className="text-gray-500 dark:text-gray-400">
            No contestants found. Add your first contestant above.
          </p>
        </div>
      )}
    </div>
  );
};

export default ContestantManagement;
