source ~/.config/nvim/my-scheme.vim

" Plugins will be downloaded under the specified directory.
call plug#begin('~/.local/share/nvim/site/plugged')

	" nerdtree
	Plug 'preservim/nerdtree'
	Plug 'sonph/onehalf', { 'rtp': 'vim' }
	Plug 'Asheq/close-buffers.vim'

	" visual settings
	Plug 'junegunn/goyo.vim'
	Plug 'junegunn/limelight.vim'

	" color theme plugins
	Plug 'vim-airline/vim-airline'

	" copilot
	Plug 'github/copilot.vim'

	" rust
	Plug 'rust-lang/rust.vim'
	Plug 'neoclide/coc.nvim', {'branch': 'release'}
	Plug 'dense-analysis/ale'

	" list ends here. plugins become visible to vim after this call.

call plug#end()

"""""""""""""""""""""""""""""""""""""""""""""""""
" color settings
"""""""""""""""""""""""""""""""""""""""""""""""""
syntax on
set t_co=256
let &t_ut=''
set t_Co=256
set cursorline
set nu
hi NonText guifg=bg
set laststatus=0

"""""""""""""""""""""""""""""""""""""""""""""""""
" visual settings
"""""""""""""""""""""""""""""""""""""""""""""""""
" for goyo
let g:goyo_width=85

" for nerdtree
let g:NERDTreeWinPos = "left"
let nerdtreemapopeninbuffer='<enter>'
let nerdtreemapopenintab='<shift><enter>'

" for limelight
" color name (:help cterm-colors) or ansi code
let g:limelight_conceal_ctermfg = 'gray'
let g:limelight_conceal_ctermfg = 240
" color name (:help gui-colors) or rgb color
let g:limelight_conceal_guifg = 'darkgray'
let g:limelight_conceal_guifg = '#777777'
" highlight line
let g:limelight_bop = '^.*$'
" let g:limelight_eop = '\n'
let g:limelight_paragraph_span = 1

"""""""""""""""""""""""""""""""""""""""""""""""""
" ui settings
"""""""""""""""""""""""""""""""""""""""""""""""""
" keep cursor in the middle of the page, useful for editing text
set so=999
set splitright

" turn limelight on by default
" autocmd vimenter * limelight
" turn goyo on by default
" autocmd vimenter * goyo
" autocmd vimenter * airlinetoggle
" autocmd vimenter * nerdtree | wincmd p

 " in goyo, if airline is turned on, do nto show scratch area
autocmd! user goyoenter nested execute "nerdtreeclose"
autocmd! user goyoenter nested set eventignore=focusgained
autocmd! user goyoleave nested set eventignore=

"""""""""""""""""""""""""""""""""
"" COC
"""""""""""""""""""""""""""""""""
function! CheckBackspace() abort
  let col = col('.') - 1
  return !col || getline('.')[col - 1]  =~# '\s'
endfunction

" Add `:Format` command to format current buffer
command! -nargs=0 Format :call CocActionAsync('format')

" May need for Vim (not Neovim) since coc.nvim calculates byte offset by count
" utf-8 byte sequence
set encoding=utf-8
" Some servers have issues with backup files, see #649
set nobackup
set nowritebackup

" Having longer updatetime (default is 4000 ms = 4s) leads to noticeable
" delays and poor user experience
set updatetime=300

" Always show the signcolumn, otherwise it would shift the text each time
" diagnostics appear/become resolved
set signcolumn=yes

" Use tab for trigger completion with characters ahead and navigate
" NOTE: There's always complete item selected by default, you may want to enable
" no select by `"suggest.noselect": true` in your configuration file
" NOTE: Use command ':verbose imap <tab>' to make sure tab is not mapped by
" other plugin before putting this into your config
inoremap <silent><expr> <TAB>
      \ coc#pum#visible() ? coc#pum#next(1) :
      \ CheckBackspace() ? "\<Tab>" :
      \ coc#refresh()
inoremap <expr><S-TAB> coc#pum#visible() ? coc#pum#prev(1) : "\<C-h>"

inoremap <silent><expr> <CR> coc#pum#visible() ? coc#pum#confirm() : "\<CR>"

" Use <c-space> to trigger completion
if has('nvim')
  inoremap <silent><expr> <c-space> coc#refresh()
else
  inoremap <silent><expr> <c-@> coc#refresh()
endif

"""""""""""""""""""""""""""""""""
"" nerdtree
"""""""""""""""""""""""""""""""""
let nerdtreeautodeletebuffer = 1
let nerdtreeminimalui = 1
let nerdtreedirarrows = 1

nnoremap <C-n> :NERDTreeMirror<CR>:NERDTreeFocus<CR>

autocmd VimEnter * NERDTree
autocmd VimEnter * wincmd p
autocmd BufEnter * silent! lcd %:p:h

function! s:goyo_enter()
  execute "NERDTreeToggle"
  if executable('tmux') && strlen($TMUX)
    silent !tmux set status off
    silent !tmux list-panes -F '\#F' | grep -q Z || tmux resize-pane -Z
  endif
  set noshowmode
  set noshowcmd
  set scrolloff=999
  Limelight
endfunction

function! s:goyo_leave()
  execute "NERDTreeToggle"
  if executable('tmux') && strlen($TMUX)
    silent !tmux set status on
    silent !tmux list-panes -F '\#F' | grep -q Z && tmux resize-pane -Z
  endif
  set showmode
  set showcmd
  set scrolloff=5
  Limelight!
  " ...
endfunction

" Exit Vim if NERDTree is the only window remaining in the only tab.
autocmd BufEnter * if tabpagenr('$') == 1 && winnr('$') == 1 && exists('b:NERDTree') && b:NERDTree.isTabTree() | quit | endif

autocmd! User GoyoEnter nested call <SID>goyo_enter()
autocmd! User GoyoLeave nested call <SID>goyo_leave()

" Personal remaps
nnoremap <A-j> :m .+1<CR>==
nn<A-k> :m .-2<CR>==
tnoremap <Esc> <C-\><C-n>

nnoremap ,m :tabn<CR>
nnoremap ,n :tabp<CR>

nnoremap ,. :bn<CR>
nnoremap ,, :bp<CR>

nnoremap ,q :qa!<CR>
nnoremap ,d :NERDTreeToggle<CR>
nnoremap ,g :Goyo<CR>

if exists('+termguicolors')
  let &t_9f = "\<Esc>[38;2;%lu;%lu;%lum"
  let &t_9b = "\<Esc>[48;2;%lu;%lu;%lum"
  set termguicolors
endif

" fix tabs and stuff
set autoindent noexpandtab tabstop=4 shiftwidth=4

" set tera to html
au BufRead,BufNewFile *.tera set filetype=html


