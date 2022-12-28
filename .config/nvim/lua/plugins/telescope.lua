local opts = { noremap = true, silent = true }
return { "nvim-telescope/telescope.nvim", -- telescope search
    keys = {
        { -- telescope file search
            "<leader>f",
            "<CMD>lua require'telescope.builtin'.find_files(require('telescope.themes').get_dropdown())<CR>",
            mode = "n",
            opts.unpack,
        },
        { -- telescope word search
            "<leader>g",
            "<CMD>Telescope live_grep<CR>",
            mode = "n",
            opts.unpack,
        }
    },
    config = function()
        local telescope = require("telescope")
        local actions = require("telescope.actions")
        telescope.setup {
            defaults = {
                mappings = {
                    i = {
                        ["<C-c>"] = actions.close,
                        ["<C-j>"] = actions.move_selection_next,
                        ["<C-k>"] = actions.move_selection_previous,
                        ["<C-h>"] = actions.select_horizontal,
                        ["<C-v>"] = actions.select_vertical,
                    },
                    n = {
                        ["<C-c>"] = actions.close,
                        ["<C-h>"] = actions.select_horizontal,
                        ["<C-v>"] = actions.select_vertical,
                    },
                }
            }
        }
    end,
}