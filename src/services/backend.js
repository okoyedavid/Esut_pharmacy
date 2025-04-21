import { supabase } from "./supabase";

async function getData(table, filter, select = "*") {
  let query = supabase.from(table).select(select);

  if (Array.isArray(filter) || (filter?.column && filter?.value)) {
    if (Array.isArray(filter)) {
      filter.forEach(({ column, value }) => {
        query = query.eq(column, value);
      });
    } else {
      query = query.eq(filter.column, filter.value);
    }
  }

  const { data, error } = await query;

  if (error) {
    console.log(error.message);
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
  let query = supabase.from(table).delete();

  if (Array.isArray(filter)) {
    filter.forEach(({ column, value }) => {
      query = query.eq(column, value);
    });
  } else {
    query = query.eq(filter.column, filter.value);
  }

  const { data, error } = await query;

  if (error) {
    console.error(error.message);
    throw new Error(`Error Deleting from ${table} table: ${error.message}`);
  }

  return data;
}

export { getData, updateTable, insertData, deleteData };
