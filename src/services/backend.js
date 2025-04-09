import { supabase } from "./supabase";

async function getData(table, filter) {
  let query = supabase.from(table).select("*");

  if (filter?.column && filter?.value) {
    query = query.eq(filter.column, filter.value);
  }

  const { data, error } = await query;

  if (error) {
    console.error("There was an error fetching data:", error.message);
    return;
  }

  return data;
}
async function updateTable(table, data, filter) {
  let query = supabase.from(table).update(data);

  if (Array.isArray(filter)) {
    filter.forEach(({ column, value }) => {
      query = query.eq(column, value);
    });
  } else {
    query = query.eq(filter.column, filter.value);
  }

  const { data: collection, error } = await query.select("*");

  if (error) {
    console.error("There was an error updating data:", error.message);
    return;
  }

  return collection;
}

async function insertData(table, data) {
  const { data: info, error } = await supabase
    .from(table)
    .insert(data)
    .select("*");

  if (error) {
    console.error(error.message);
    throw new Error(`Error updating messages ${table}`, error);
  }

  return info;
}

async function deleteData(table, filter) {
  const { error } = await supabase
    .from(table)
    .delete()
    .eq(filter.column, filter.value);

  if (error) {
    console.error(error.message);
    throw new Error(`Error updating messages ${table}`, error);
  }
}

export { getData, updateTable, insertData, deleteData };
