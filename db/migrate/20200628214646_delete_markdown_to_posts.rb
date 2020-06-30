class DeleteMarkdownToPosts < ActiveRecord::Migration[6.0]
  def change
    remove_column :posts, :markdown
  end
end
