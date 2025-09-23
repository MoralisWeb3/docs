export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
    public: {
        Tables: {
            feedback: {
                Row: {
                    choice: string | null;
                    created_at: string | null;
                    id: string;
                    ip: string | null;
                    message: string | null;
                    page: string | null;
                    score: number | null;
                };
                Insert: {
                    choice?: string | null;
                    created_at?: string | null;
                    id?: string;
                    ip?: string | null;
                    message?: string | null;
                    page?: string | null;
                    score?: number | null;
                };
                Update: {
                    choice?: string | null;
                    created_at?: string | null;
                    id?: string;
                    ip?: string | null;
                    message?: string | null;
                    page?: string | null;
                    score?: number | null;
                };
            };
            page: {
                Row: {
                    checksum: string | null;
                    id: number;
                    meta: Json | null;
                    path: string;
                };
                Insert: {
                    checksum?: string | null;
                    id?: number;
                    meta?: Json | null;
                    path: string;
                };
                Update: {
                    checksum?: string | null;
                    id?: number;
                    meta?: Json | null;
                    path?: string;
                };
            };
            page_section: {
                Row: {
                    content: string | null;
                    embedding: number[] | null;
                    id: number;
                    page_id: number;
                    token_count: number | null;
                };
                Insert: {
                    content?: string | null;
                    embedding?: number[] | null;
                    id?: number;
                    page_id: number;
                    token_count?: number | null;
                };
                Update: {
                    content?: string | null;
                    embedding?: number[] | null;
                    id?: number;
                    page_id?: number;
                    token_count?: number | null;
                };
            };
        };
        Views: {
            [_ in never]: never;
        };
        Functions: {
            [_ in never]: never;
        };
        Enums: {
            [_ in never]: never;
        };
        CompositeTypes: {
            [_ in never]: never;
        };
    };
}
