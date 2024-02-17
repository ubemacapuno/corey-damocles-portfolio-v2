// Size
export type FontSize =
	| 'huge'
	| 'largest'
	| 'xlarge'
	| 'xxlarge'
	| 'large'
	| 'normal'
	| 'small'
	| 'smallest'
	| 'xsmall'
export type GapSize = 'normal' | 'large' | 'largest' | 'small' | 'smallest' | 'xsmall' | '0'

// Theme
export type Status = 'info' | 'warning' | 'caution' | 'success'
export type Text = 'text' | 'subtext' | 'title'
export type Theme = 'primary' | 'secondary' | 'tertiary'
export type Accent = Status | Text | Theme

// Icons (from Google Icons)
export type IconName =
	| 'home'
	| 'code'
	| 'star'
	| 'fork'
	| 'close'
	| 'expand_more'
	| 'expand_content'
	| 'open_in_new'
