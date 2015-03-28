# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150328060724) do

  create_table "campgrounds", force: true do |t|
    t.string   "name"
    t.string   "state"
    t.string   "region1"
    t.string   "region2"
    t.decimal  "lon",           precision: 15, scale: 10
    t.decimal  "lat",           precision: 15, scale: 10
    t.integer  "elevation"
    t.integer  "no_of_sites"
    t.string   "org_name"
    t.string   "phone"
    t.date     "open_date"
    t.date     "close_date"
    t.decimal  "fee1",          precision: 10, scale: 2
    t.decimal  "fee2",          precision: 10, scale: 2
    t.integer  "day_limit"
    t.decimal  "scenic_rating", precision: 10, scale: 1
    t.decimal  "rugged_rating", precision: 10, scale: 1
    t.decimal  "rv_rating",     precision: 10, scale: 1
    t.decimal  "family_rating", precision: 10, scale: 1
    t.boolean  "group_camp"
    t.boolean  "private_camp"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "slug"
  end

  add_index "campgrounds", ["slug"], name: "index_campgrounds_on_slug", unique: true, using: :btree

  create_table "campsites", force: true do |t|
    t.string   "campsite_no"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "campground_id"
  end

end
