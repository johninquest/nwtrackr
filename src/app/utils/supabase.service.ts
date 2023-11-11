import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  constructor() {
    this.supabase = createClient(
      environment.supabase.projectUrl,
      environment.supabase.projectKey
    );
  }
  private supabase: SupabaseClient;

  async getAllRowsInTable(tableName: string) {
    let { data: requests, error } = await this.supabase
      .from(tableName)
      .select("*").order('created_at', { ascending: false });
    return { data: requests, error };
  }

  async allRowsInTable(tableName: string) {
    let { data: requests, error } = await this.supabase
      .from(tableName)
      .select("*");
    return { data: requests, error };
  }

  async allRowsInTableWhere(tableName: string, whereColumn: string, whereValue: string) {
    let { data: requests, error } = await this.supabase
      .from(tableName)
      .select("*").eq(whereColumn, whereValue);
    return { data: requests, error };
  }

  async addRowToTable(tableName: string, rowData: object) {
    let { data, error } = await this.supabase
      .from(tableName)
      .insert([rowData]);
    return { data, error };
  }

  async updateRowInTable(tableName: string, rowData: object) {
    let { data, error } = await this.supabase
      .from(tableName)
      .insert([rowData]);
    return { data, error };
  }

  async deleteRowInTable(tableName: string, rowId: number) {
    let { data, error } = await this.supabase
      .from(tableName).delete({});

    return { data, error };
  }
}
