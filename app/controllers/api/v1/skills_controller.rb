class Api::V1::SkillsController < Api::V1::BaseController
  respond_to :html, :xml, :json

  def index
    respond_with Skill.all
  end

  def create
    respond_with :api, :v1, Skill.create(skill_params)
  end

  def destroy
    respond_with Skill.destroy(params[:id])
  end

  def update
    skill = Skill.find(params[:skill][:id])
    skill.update_attributes(skill_params)
    render json: skill
    # respond_with skill, json: skill
  end

 private

  def skill_params
    params.require(:skill).permit(:id, :name, :details, :level)
  end
end
