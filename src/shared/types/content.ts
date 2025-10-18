export type Lang = 'pt' | 'la' | 'en' | 'es' | 'fr' | 'it';
export type TMap = Partial<Record<Lang, string>>;

export type BlockType =
  | 'heading'
  | 'paragraph'
  | 'quote'
  | 'list'
  | 'list-item'
  | 'image'
  | 'verse'
  | 'hymn'
  | 'prayer'
  | 'antiphon'
  | 'rubric'
  | 'response'
  | 'separator'
  | 'reference'
  | 'table'
  | 'section';

export interface Block {
  type: BlockType;
  text?: TMap;
  children?: Block[];
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  attrs?: Record<string, unknown>;
}

export interface Section {
  type: 'section';
  key: string;
  title?: TMap;
  blocks: Block[];
}

export interface PortableDoc {
  schemaVersion: string;
  id: string;
  type: 'devotional' | 'book' | 'article' | 'hymnal';
  slug: string;
  langs: Lang[];
  meta: {
    title: TMap;
    subtitle?: TMap;
    author?: string;
    source?: string;
    date?: string;
    tags?: string[];
    images?: Record<string, string>;
  };
  content: Section[];
}
