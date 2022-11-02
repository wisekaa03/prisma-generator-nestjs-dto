import { TemplateHelpers } from '../template-helpers';
import { Model, TypeParams } from '../types';
import { computeCreateDtoParams } from '../compute-model-params/compute-create-dto-params';
import { computeUpdateDtoParams } from '../compute-model-params/compute-update-dto-params';
import { computePlainDtoParams } from '../compute-model-params/compute-plain-dto-params';

interface ComputeModelParamsParam {
  model: Model;
  allModels: Model[];
  templateHelpers: TemplateHelpers;
  connectNamePrefix: string;
  connectNamePostfix: string;
  createNamePrefix: string;
  createNamePostfix: string;
  updateNamePrefix: string;
  updateNamePostfix: string;
}
export const computeTypeParams = ({
  model,
  allModels,
  templateHelpers,
  connectNamePrefix,
  connectNamePostfix,
  createNamePrefix,
  createNamePostfix,
  updateNamePrefix,
  updateNamePostfix,
}: ComputeModelParamsParam): TypeParams => ({
  create: computeCreateDtoParams({
    model,
    allModels,
    templateHelpers,
    createNamePrefix,
    createNamePostfix,
    connectNamePrefix,
    connectNamePostfix,
  }),
  update: computeUpdateDtoParams({
    model,
    allModels,
    templateHelpers,
    connectNamePrefix,
    connectNamePostfix,
    createNamePrefix,
    createNamePostfix,
    updateNamePrefix,
    updateNamePostfix,
  }),
  plain: computePlainDtoParams({
    model,
    allModels,
    templateHelpers,
  }),
});
